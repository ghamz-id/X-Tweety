const { ObjectId } = require("mongodb");
const { database } = require("../config/mongo");

class Post {
	static db_post() {
		return database.collection("Posts");
	}

	static async addPost(payload) {
		const post = await this.db_post().insertOne(payload);
		return post;
	}

	static async findAll() {
		const agg = [
			{
				$sort: {
					createdAt: -1,
				},
			},
			{
				$lookup: {
					from: "Users",
					localField: "authorId",
					foreignField: "_id",
					as: "author",
				},
			},
			{
				$project: {
					"author.password": 0,
				},
			},
		];
		const cursor = this.db_post().aggregate(agg);
		const posts = await cursor.toArray();
		return posts;
	}

	static async findById(id) {
		const agg = [
			{
				$match: {
					_id: new ObjectId(String(id)),
				},
			},
			{
				$lookup: {
					from: "Users",
					localField: "authorId",
					foreignField: "_id",
					as: "author",
				},
			},
			{
				$project: {
					"author.password": 0,
				},
			},
		];
		const cursor = this.db_post().aggregate(agg);
		const post = await cursor.toArray();
		return post;
	}

	static async addComment(payload, id) {
		const post = await this.db_post().updateOne(
			{ _id: new ObjectId(String(id)) },
			{ $push: { comments: payload } }
		);
		return post;
	}

	static async addLike(payload, id) {
		// Validasi
		const { username } = payload;
		let option = { $push: { likes: payload } };
		const dataPost = await this.findById(id);
		dataPost[0].likes.map((el) => {
			if (el.username === username) {
				option = { $pull: { likes: { username } } };
			}
		});

		const post = await this.db_post().updateOne(
			{ _id: new ObjectId(String(id)) },
			option
		);
		return post;
	}
}

module.exports = Post;

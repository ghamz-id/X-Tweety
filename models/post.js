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
		const posts = await this.db_post().find().toArray();
		return posts;
	}

	static async findById(id) {
		const post = await this.db_post().findOne({
			_id: new ObjectId(String(id)),
		});
		return post;
	}

	static async addComment(payload, id) {
		const post = await this.db_post().updateOne(
			{ _id: new ObjectId(String(id)) },
			{ $push: { comment: payload } }
		);
		return post;
	}

	static async addLike(payload, id) {
		const post = await this.db_post().updateOne(
			{ _id: new ObjectId(String(id)) },
			{ $push: { likes: payload } }
		);
		return post;
	}
}

module.exports = Post;

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
}

module.exports = Post;

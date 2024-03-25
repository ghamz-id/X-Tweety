const { ObjectId } = require("mongodb");
const { database } = require("../config/mongo");

class User {
	static async findAll() {
		const users = await database.collection("project_tweety").find().toArray();
		return users;
	}

	static async register(payload) {
		const register = await database
			.collection("project_tweety")
			.insertOne(payload);
		return register;
	}
}

module.exports = User;

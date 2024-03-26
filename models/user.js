const { ObjectId } = require("mongodb");
const { database } = require("../config/mongo");

class User {
	static async findAll() {
		const users = await database.collection("Users").find().toArray();
		return users;
	}

	static async register(payload) {
		const register = await database.collection("Users").insertOne(payload);
		return register;
	}
}

module.exports = User;

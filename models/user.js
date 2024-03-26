const { ObjectId } = require("mongodb");
const { database } = require("../config/mongo");

class User {
	static async register(payload) {
		const register = await database.collection("Users").insertOne(payload);
		return register;
	}

	static async findByEmail(email) {
		return database.collection("Users").findOne({ email });
	}
}

module.exports = User;

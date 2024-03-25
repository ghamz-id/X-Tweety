const { ObjectId } = require("mongodb");
const { database } = require("../config/mongo");

class User {
	static async findAll() {
		const users = await database.collection("project_tweety");
		return users;
	}
}

module.exports = User;

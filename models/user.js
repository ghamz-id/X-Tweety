const { ObjectId } = require("mongodb");
const { database } = require("../config/mongo");

class User {
	static db_user() {
		return database.collection("Users");
	}

	static async register(payload) {
		const register = await this.db_user().insertOne(payload);
		return register;
	}

	static async findByEmail(email) {
		const user = await this.db_user().findOne({ email });
		return user;
	}

	static async findByUsername(username) {
		const user = await this.db_user().findOne({ username });
		return user;
	}

	static async findById(id) {
		const user = await this.db_user().findOne({
			_id: new ObjectId(String(id)),
		});
		return user;
	}
}

module.exports = User;

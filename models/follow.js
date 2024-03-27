const { database } = require("../config/mongo");

class Follow {
	static db_follow() {
		return database.collection("Follows");
	}

	static async addFollow(payload) {
		const follow = await this.db_follow().insertOne(payload);
		return follow;
	}
}

module.exports = Follow;

const { ObjectId } = require("mongodb");
const { database } = require("../config/mongo");

class Follow {
	static db_follow() {
		return database.collection("Follows");
	}

	static async addFollow(payload) {
		const follow = await this.db_follow().insertOne(payload);
		return follow;
	}

	// Validasi
	static async dataFollow(followingId, followerId) {
		const agg = [
			{
				$match: {
					followingId: new ObjectId(String(followingId)),
					followerId: new ObjectId(String(followerId)),
				},
			},
		];
		const cursor = this.db_follow().aggregate(agg);
		const data = await cursor.toArray();
		return data;
	}
	static async unFollow(id) {
		const follow = await this.db_follow().deleteOne({
			_id: new ObjectId(String(id)),
		});
		return follow;
	}
}

module.exports = Follow;

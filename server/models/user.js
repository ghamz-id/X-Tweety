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

	static async searchByUsername(username) {
		const agg = [
			{
				$match: {
					username: { $regex: username },
				},
			},
			{
				$lookup: {
					from: "Follows",
					localField: "_id",
					foreignField: "followingId",
					as: "follower",
				},
			},
			{
				$lookup: {
					from: "Users",
					localField: "follower.followerId",
					foreignField: "_id",
					as: "follower_detail",
				},
			},
			{
				$lookup: {
					from: "Follows",
					localField: "_id",
					foreignField: "followerId",
					as: "following",
				},
			},
			{
				$lookup: {
					from: "Users",
					localField: "following.followingId",
					foreignField: "_id",
					as: "following_detail",
				},
			},
			{
				$project: {
					password: 0,
					"following_detail.password": 0,
					"follower_detail.password": 0,
				},
			},
		];
		const cursor = this.db_user().aggregate(agg);
		const user = await cursor.toArray();
		return user;
	}

	static async getDetail(id) {
		const agg = [
			{
				$match: {
					_id: new ObjectId(String(id)),
				},
			},
			{
				$lookup: {
					from: "Follows",
					localField: "_id",
					foreignField: "followingId",
					as: "follower",
				},
			},
			{
				$lookup: {
					from: "Users",
					localField: "follower.followerId",
					foreignField: "_id",
					as: "follower_detail",
				},
			},
			{
				$lookup: {
					from: "Follows",
					localField: "_id",
					foreignField: "followerId",
					as: "following",
				},
			},
			{
				$lookup: {
					from: "Users",
					localField: "following.followingId",
					foreignField: "_id",
					as: "following_detail",
				},
			},
			{
				$project: {
					password: 0,
					"following_detail.password": 0,
					"follower_detail.password": 0,
				},
			},
		];
		const cursor = this.db_user().aggregate(agg);
		const user = await cursor.toArray();
		return user;
	}

	// FOR VALIDATE
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

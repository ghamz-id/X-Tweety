const { ObjectId } = require("mongodb");
const Follow = require("../models/follow");

const followResolvers = {
	Mutation: {
		addFollow: async (_, args, contextValue) => {
			contextValue.auth();
			const followingId = new ObjectId(String(args.followerId));
			const followerId = new ObjectId(String(contextValue.auth().id));
			const createdAt = (updatedAt = new Date());

			const input = {
				followingId,
				followerId,
				createdAt,
				updatedAt,
			};
			await Follow.addFollow(input);
			return input;
		},
	},
};

module.exports = followResolvers;

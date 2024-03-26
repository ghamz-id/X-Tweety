const { ObjectId } = require("mongodb");
const Post = require("../models/post");
const redis = require("../config/redis_connection");

const postResolvers = {
	Query: {
		posts: async () => {
			const redisPost = await redis.get("posts");
			if (redisPost) {
				return JSON.parse(redisPost);
			} else {
				const posts = await Post.findAll();
				await redis.set("posts", JSON.stringify(posts));
				return posts;
			}
		},
	},
	Mutation: {
		addPost: async (_, args, contextValue) => {
			contextValue.auth();
			const { content, imgUrl } = args.post;
			const authorId = new ObjectId(String(contextValue.auth().id));
			let createdAt = (updatedAt = new Date());

			const newPost = {
				content,
				imgUrl,
				authorId,
				createdAt,
				updatedAt,
			};

			await Post.addPost(newPost);
			await redis.del("posts");
			return newPost;
		},
	},
};

module.exports = postResolvers;

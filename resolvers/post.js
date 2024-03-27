const { ObjectId } = require("mongodb");
const Post = require("../models/post");
const redis = require("../config/redis_connection");

const postResolvers = {
	Query: {
		posts: async (_, __, contextValue) => {
			contextValue.auth();
			const redisPost = await redis.get("posts");
			if (redisPost) {
				return JSON.parse(redisPost);
			} else {
				const posts = await Post.findAll();
				await redis.set("posts", JSON.stringify(posts));
				return posts;
			}
		},
		postById: async (_, args, contextValue) => {
			contextValue.auth();
			if (!args._id) throw new Error("ID not found");

			const data_post = await Post.findById(args._id);
			if (!data_post) throw new Error("ID not found");
			return data_post;
		},
	},
	Mutation: {
		addPost: async (_, args, contextValue) => {
			contextValue.auth();
			const { content, imgUrl } = args.post;
			const authorId = new ObjectId(String(contextValue.auth().id));
			let createdAt = (updatedAt = new Date());

			// Validation
			if (!content) throw new Error("Content is require");

			const newPost = {
				content,
				imgUrl,
				authorId,
				createdAt,
				updatedAt,
				comment: [],
				likes: [],
				tags: [],
			};

			await Post.addPost(newPost);
			await redis.del("posts");
			return newPost;
		},
	},
};

module.exports = postResolvers;

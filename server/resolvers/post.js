const { ObjectId } = require("mongodb");
const Post = require("../models/post");
const User = require("../models/user");
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
			return data_post[0];
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

			const input = {
				content,
				imgUrl,
				authorId,
				createdAt,
				updatedAt,
				comments: [],
				likes: [],
				tags: [],
			};

			await Post.addPost(input);
			await redis.del("posts");
			return input;
		},
		addComment: async (_, args, contextValue) => {
			contextValue.auth();
			const { content } = args;
			const { postId } = args;
			const { username } = await User.findById(contextValue.auth().id);
			const createdAt = (updatedAt = new Date());

			if (!content) throw new Error("Insert your comment");

			const input = {
				content,
				username,
				createdAt,
				updatedAt,
			};
			await Post.addComment(input, postId);
			await redis.del("posts");
			return input;
		},
		addLike: async (_, args, contextValue) => {
			contextValue.auth();
			const { postId } = args;
			const { username } = await User.findById(contextValue.auth().id);
			const createdAt = (updatedAt = new Date());

			const input = {
				username,
				createdAt,
				updatedAt,
			};
			await Post.addLike(input, postId);
			await redis.del("posts");
			return input;
		},
	},
};

module.exports = postResolvers;

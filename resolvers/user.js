const User = require("../models/user");

// ----------- CONTROLLER -----------
const userResolvers = {
	Query: {
		users: async () => {
			const users = await User.findAll();
			return users;
		},
	},
	Mutation: {
		register: async (_, args) => {
			const { name, username, email, password } = args.User;
			const result = await User.register({ name, username, email, password });

			args.User._id = result.insertedId;
			return args.User;
		},
	},
};

module.exports = userResolvers;

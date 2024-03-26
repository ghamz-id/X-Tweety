const User = require("../models/user");

// ----------- CONTROLLER -----------
const resolvers = {
	Query: {
		users: async () => {
			const users = await User.findAll();
			return users;
		},
	},
	Mutation: {
		addUser: async (_, args) => {
			const { name, username, email, password } = args.User;
			const result = await User.register({ name, username, email, password });

			args.User._id = result.insertedId;
			return args.User;
		},
	},
};

module.exports = resolvers;

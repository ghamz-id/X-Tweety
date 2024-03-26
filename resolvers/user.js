const { hashPassword, comparePassword } = require("../helpers/bcrypt");
const { signToken } = require("../helpers/jwt");
const User = require("../models/user");

// ----------- CONTROLLER -----------
const userResolvers = {
	Mutation: {
		login: async (_, args) => {
			const { email, password } = args;
			const data_user = await User.findByEmail(email);
			if (!data_user) throw new Error("Invalid Email or Password");

			const verifyPassword = comparePassword(password, data_user.password);
			if (!verifyPassword) throw new Error("Invalid Email or Password");

			const token = {
				access_token: signToken({
					id: data_user.id,
				}),
			};
			return token;
		},
		register: async (_, args) => {
			const { name, username, email, password } = args.User;
			await User.register({
				name,
				username,
				email,
				password: hashPassword(password),
			});

			const data_user = await User.findByEmail(email);
			return data_user;
		},
	},
};

module.exports = userResolvers;

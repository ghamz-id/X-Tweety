const { ObjectId } = require("mongodb");
const { hashPassword, comparePassword } = require("../helpers/bcrypt");
const { signToken } = require("../helpers/jwt");
const User = require("../models/user");

// ----------- CONTROLLER -----------
const userResolvers = {
	Query: {
		findById: async (_, args) => {
			if (!args._id) throw new Error("ID not found");

			const data_user = await User.findById(args._id);
			if (!data_user) throw new Error("ID not found");
			return data_user;
		},
		findByUsername: async (_, args) => {
			const data_user = await User.findByUsername(args.username);
			if (!data_user) throw new Error("Username not found");
			return data_user;
		},
	},
	Mutation: {
		login: async (_, args) => {
			const { email, password } = args;
			const data_user = await User.findByEmail(email);
			if (!data_user) throw new Error("Invalid Email or Password");

			const verifyPassword = comparePassword(password, data_user.password);
			if (!verifyPassword) throw new Error("Invalid Email or Password");

			const token = {
				access_token: signToken({
					id: data_user._id,
					email: data_user.email,
				}),
			};
			return token;
		},
		register: async (_, args) => {
			const { name, username, email, password } = args.User;
			const data_user = await User.findByEmail(email);
			const user = await User.findByUsername(username);
			const validRegex =
				/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

			// Validation
			if (data_user) throw new Error("Email must be unique");
			if (user) throw new Error("Username must be unique");
			if (!username) throw new Error("Username is required");
			if (!email) throw new Error("Email is required");
			if (!password) throw new Error("Password is required");
			if (password.length < 5) throw new Error("Minimun password is 5");
			if (!email.match(validRegex))
				throw new Error("Email must be formated (example@mail.com)");

			// Create User
			const input = {
				name,
				username,
				email,
				password: hashPassword(password),
			};
			await User.register(input);
			return input;
		},
	},
};

module.exports = userResolvers;

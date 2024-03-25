const User = require("../models/user");

// ----------- SCHEMA -----------
const typeDefs = `#graphql
  type User {
    id: ID
	username: String
	email: String
	password: String
  }

  # Query -> (Read)
  type Query {
    users: [User] 
  }

  # Mutation -> (Create, Update, Delete)
  type Mutation {
  addUser(username: String,	email: String, password: String): User
  }
`;

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
			const { username, email, password } = args;
			const result = await User.register({ username, email, password });
			return result;
		},
	},
};

module.exports = {
	typeDefs,
	resolvers,
};

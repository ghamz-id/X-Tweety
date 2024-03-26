// ----------- SCHEMA -----------
const typeDefs = `#graphql
  type User {
	_id: ID
	name: String
	username: String!
	email: String!
	password: String!
  }

  input UserContent {
	name: String
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
  addUser(User: UserContent): User
  }
`;

module.exports = typeDefs;

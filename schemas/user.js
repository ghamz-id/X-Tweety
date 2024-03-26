// ----------- SCHEMA -----------
const userTypeDefs = `#graphql
  type User {
    _id: ID
    name: String
    username: String
    email: String
    password: String
  }

  type Token {
    access_token: String
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
    login(email: String, password: String): Token
    register(User: UserContent): User
  }
`;

module.exports = userTypeDefs;

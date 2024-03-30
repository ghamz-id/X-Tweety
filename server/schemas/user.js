// ----------- SCHEMA -----------
const userTypeDefs = `#graphql
  type User {
    _id: ID
    name: String
    username: String!
    email: String!
    password: String
    follower: [Follow]
    follower_detail: [Follow_Detail]
    following: [Follow]
    following_detail: [Follow_Detail]
  }

  type Token {
    access_token: String
    id: ID
  }

  type Follow {
      _id: ID
      followingId: ID
      followerId: ID
      createdAt: String
      updatedAt: String
  }

  type Follow_Detail {
    _id: ID
    name: String
    username: String
    email: String
    password: String
  }

  input UserContent {
    name: String
    username: String
    email: String
    password: String
  }

  # Query -> (Read)
  type Query {
    searchUser(username: String) : [User]
    getDetail(_id: ID) : User
  }

  # Mutation -> (Create, Update, Delete)
  type Mutation {
    login(email: String, password: String): Token
    register(User: UserContent): User
  }
`;

module.exports = userTypeDefs;

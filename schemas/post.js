// ----------- SCHEMA -----------
const typeDefs = `#graphql
  type Post {
	_id: ID
    content: String!
    tags: [] String
    imgUrl: String
    authorId: ID!
    comment: [Comment]
    likes: [Likes]
    createdAt: Date
    updatedAt: Date
  }

  type Comment {
    content: String!
    username: String!
    createdAt: Date
    updatedAt: Date
  }

  type Likes {
    username: String!
    createdAt: Date
    updatedAt: Date
  }

  # Query -> (Read)
  type Query {
    posts: [Post]
  }

  # Mutation -> (Create, Update, Delete)
    # type Mutation {
    # addUser(User: UserContent): User
    # }
`;

module.exports = typeDefs;

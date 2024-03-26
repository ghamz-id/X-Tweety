// ----------- SCHEMA -----------
const postTypeDefs = `#graphql
  type Post {
	_id: ID
    content: String
    tags: [String]
    imgUrl: String
    authorId: ID
    comment: [Comment]
    likes: [Likes]
    createdAt: String
    updatedAt: String
  }

  type Comment {
    content: String
    username: String
    createdAt: String
    updatedAt: String
  }

  type Likes {
    username: String
    createdAt: String
    updatedAt: String
  }

  # Query -> (Read)
  type Query {
    posts: [Post]
  }

  # Mutation -> (Create, Update, Delete)
`;

module.exports = postTypeDefs;

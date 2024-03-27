// ----------- SCHEMA -----------
const postTypeDefs = `#graphql
  type Post {
	  _id: ID
    content: String!
    tags: [String]
    imgUrl: String
    authorId: ID!
    comment: [Comment]
    likes: [Likes]
    createdAt: String
    updatedAt: String
  }

  input PostContent {
    content: String
    imgUrl: String
  }

  type Comment {
    content: String!
    username: String!
    createdAt: String
    updatedAt: String
  }

  type Likes {
    username: String!
    createdAt: String
    updatedAt: String
  }

  # Query -> (Read)
  type Query {
    posts: [Post]
    postById(_id: ID): Post
  }

  # Mutation -> (Create, Update, Delete)
  type Mutation {
    addPost(post: PostContent) : Post
  }
`;

module.exports = postTypeDefs;

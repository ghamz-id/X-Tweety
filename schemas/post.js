// ----------- SCHEMA -----------
const postTypeDefs = `#graphql
  type Post {
	  _id: ID
    content: String!
    tags: [String]
    imgUrl: String
    authorId: ID!
    comments: [Comment]
    likes: [Likes]
    createdAt: String
    updatedAt: String
    author: [Author]
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

  type Author {
    _id: ID
    name: String
    username: String
    email: String
    password: String
  }

  # Query -> (Read)
  type Query {
    posts: [Post]
    postById(_id: ID): Post
  }

  # Mutation -> (Create, Update, Delete)
  type Mutation {
    addPost(post: PostContent) : Post
    addComment(content: String, postId: ID) : Comment
    addLike(postId: ID) : Likes
  }
`;

module.exports = postTypeDefs;

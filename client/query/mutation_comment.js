const { gql } = require("@apollo/client");

export const ADD_COMMENT = gql`
	mutation Mutation($content: String, $postId: ID) {
		addComment(content: $content, postId: $postId) {
			content
			username
			createdAt
			updatedAt
		}
	}
`;

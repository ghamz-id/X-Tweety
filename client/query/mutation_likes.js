import { gql } from "@apollo/client";

export const POST_LIKE = gql`
	mutation Mutation($postId: ID) {
		addLike(postId: $postId) {
			username
			createdAt
			updatedAt
		}
	}
`;

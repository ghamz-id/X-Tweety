import { gql } from "@apollo/client";

export const POSTING = gql`
	mutation Mutation($post: PostContent) {
		addPost(post: $post) {
			_id
			content
			imgUrl
			authorId
			createdAt
			updatedAt
		}
	}
`;

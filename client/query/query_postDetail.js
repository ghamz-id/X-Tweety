import { gql } from "@apollo/client";

export const GET_POST_DETAIL = gql`
	query Query($id: ID) {
		postById(_id: $id) {
			_id
			content
			tags
			imgUrl
			authorId
			comments {
				content
				username
				createdAt
				updatedAt
			}
			likes {
				username
				createdAt
				updatedAt
			}
			createdAt
			updatedAt
			author {
				_id
				name
				username
				email
				password
			}
		}
	}
`;

import { gql } from "@apollo/client";

export const GET_POSTS = gql`
	query Query {
		posts {
			_id
			content
			tags
			imgUrl
			authorId
			createdAt
			updatedAt
			author {
				_id
				name
				username
				email
				password
			}
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
		}
	}
`;

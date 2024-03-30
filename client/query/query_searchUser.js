import { gql } from "@apollo/client";

export const SEARCH_USER = gql`
	query Query($username: String) {
		searchUser(username: $username) {
			_id
			name
			username
			email
			password
			follower {
				_id
				followingId
				followerId
				createdAt
				updatedAt
			}
		}
	}
`;

import { gql } from "@apollo/client";

export const SEARCH_USER = gql`
	query SearchUser($username: String) {
		searchUser(username: $username) {
			_id
			name
			username
			email
			password
		}
	}
`;

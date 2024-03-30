import { gql } from "@apollo/client";

export const REGISTER = gql`
	mutation Mutation($user: UserContent) {
		register(User: $user) {
			_id
			name
			username
			email
			password
		}
	}
`;

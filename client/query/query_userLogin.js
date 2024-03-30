import { gql } from "@apollo/client";

export const USER_LOGIN = gql`
	query Query($id: ID) {
		getDetail(_id: $id) {
			_id
			username
		}
	}
`;

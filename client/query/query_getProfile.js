import { gql } from "@apollo/client";

export const GET_PROFILE = gql`
	query GetDetail($id: ID) {
		getDetail(_id: $id) {
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
			follower_detail {
				_id
				name
				username
				email
				password
			}
			following {
				_id
				followingId
				followerId
				createdAt
				updatedAt
			}
			following_detail {
				_id
				name
				username
				email
				password
			}
		}
	}
`;

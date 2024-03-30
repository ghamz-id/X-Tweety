import { gql } from "@apollo/client";

export const ADD_FOLLOW = gql`
	mutation Mutation($followerId: ID) {
		addFollow(followerId: $followerId) {
			_id
			followingId
			followerId
			createdAt
			updatedAt
		}
	}
`;

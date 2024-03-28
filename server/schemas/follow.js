const followTypeDefs = `#graphql
    type Follow {
        _id: ID
        followingId: ID
        followerId: ID
        createdAt: String
        updatedAt: String
    }

    type Mutation {
        addFollow(followerId: ID): Follow
    }
`;

module.exports = followTypeDefs;

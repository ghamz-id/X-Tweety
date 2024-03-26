const typeDefs = `#graphql
    type Follow {
        _id: ID
        followingId: ID
        followerId: ID
        createdAt: Date
        updatedAt: Date
    }
`;

module.exports = typeDefs;

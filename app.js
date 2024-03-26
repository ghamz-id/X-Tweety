const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
// ----------- IMPORT TYPE DEFS -----------
const userTypeDefs = require("./schemas/user");
const postTypeDefs = require("./schemas/post");
const followTypeDefs = require("./schemas/follow");
// ----------- IMPORT RESOLVERS -----------
const userResolvers = require("./resolvers/user");

const server = new ApolloServer({
	typeDefs: [userTypeDefs, postTypeDefs, followTypeDefs],
	resolvers: userResolvers,
	introspection: true, // Tambahan, agar sandbox apollo bisa diakses di environment
});

// ----------- SETUP LISTENER -----------
startStandaloneServer(server, {
	listen: { port: 4000 },
	context: ({ req, res }) => {
		// Middleware here
		return {};
	},
}).then(({ url }) => {
	console.log(`🚀  Server ready at: ${url}`);
});

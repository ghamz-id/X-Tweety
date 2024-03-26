const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const userTypeDefs = require("./schemas/user");
const userResolvers = require("./resolvers/user");
const postTypeDefs = require("./schemas/post");
const followTypeDefs = require("./schemas/follow");

const server = new ApolloServer({
	typeDefs: [userTypeDefs, postTypeDefs, followTypeDefs],
	resolvers: userResolvers,
	introspection: true, // Tambahan, agar sandbox apollo bisa diakses di environment
});

// ----------- SETUP LISTENER -----------
startStandaloneServer(server, {
	listen: { port: 3000 },
	context: ({ req, res }) => {
		// Middleware here
		return {};
	},
}).then(({ url }) => {
	console.log(`🚀  Server ready at: ${url}`);
});

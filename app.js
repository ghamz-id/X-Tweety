const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const { typeDefs, resolvers } = require("./schemas/book");

const server = new ApolloServer({
	typeDefs: typeDefs,
	resolvers: resolvers,
	introspection: true, // Tambahan, agar sandbox apollo bisa diakses di environment
});

// ----------- SETUP LISTENER -----------
startStandaloneServer(server, {
	listen: { port: 4000 },
}).then(({ url }) => {
	console.log(`🚀  Server ready at: ${url}`);
});

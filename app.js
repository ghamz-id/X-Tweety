require("dotenv").config();
const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const { verifyToken } = require("./helpers/jwt");
// ----------- IMPORT TYPE DEFS -----------
const userTypeDefs = require("./schemas/user");
const postTypeDefs = require("./schemas/post");
const followTypeDefs = require("./schemas/follow");
// ----------- IMPORT RESOLVERS -----------
const userResolvers = require("./resolvers/user");
const postResolvers = require("./resolvers/post");

const server = new ApolloServer({
	typeDefs: [userTypeDefs, postTypeDefs, followTypeDefs],
	resolvers: [userResolvers, postResolvers],
	introspection: true, // Tambahan, agar sandbox apollo bisa diakses di environment
});

// ----------- SETUP LISTENER -----------
startStandaloneServer(server, {
	listen: { port: process.env.PORT || 4000 },
	context: ({ req, res }) => {
		// Middleware here
		return {
			auth: () => {
				const auth = req.headers.authorization;
				if (!auth) throw new Error("Invalid Token");

				const [type, token] = auth.split(" ");
				if (type !== "Bearer") throw new Error("Invalid Token");

				const decoded = verifyToken(token);
				return decoded;
			},
		};
	},
}).then(({ url }) => {
	console.log(`🚀  Server ready at: ${url}`);
});

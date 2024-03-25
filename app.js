const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");

// ----------- DATA DUMMY -----------
const books = [
	{
		id: 1,
		title: "Jejak petualang",
		author: "adamas",
		price: 10_000,
	},
	{
		id: 2,
		title: "Jejak petualang 2",
		author: "adamas",
		price: 10_000,
	},
];

// ----------- SCHEMA -----------
const typeDefs = `#graphql
  type Book {
    id: ID
    title: String
    author: String
    price: Int
  }

  # Query -> (Read)
  type Query {
    books: [Book] 
  }

  # Mutation -> (Create, Update, Delete)
  # type Mutation {}
`;

const resolvers = {
	Query: {
		books: () => {
			// Implementasi cara mendapatkan data
			return books;
		},
	},
};

const server = new ApolloServer({
	typeDefs: typeDefs,
	resolvers: resolvers,

	// Tambahan, agar sandbox apollo bisa diakses di environment
	introspection: true,
});

// Setup listener
startStandaloneServer(server, {
	listen: { port: 4000 },
})
	.then(({ url }) => {
		console.log(`🚀  Server ready at: ${url}`);
	})
	.catch((err) => {
		console.log(err);
	});

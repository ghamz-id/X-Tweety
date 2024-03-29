import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
	uri: "https://3901-180-252-166-124.ngrok-free.app/",
	cache: new InMemoryCache(),
});

export default client;

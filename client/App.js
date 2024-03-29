import { NavigationContainer } from "@react-navigation/native";
import Stack_Navigator from "./component/stack_navigators";
import client from "./config/connection";
import { ApolloProvider } from "@apollo/client";

export default function App() {
	return (
		<ApolloProvider client={client}>
			<NavigationContainer>
				<Stack_Navigator />
			</NavigationContainer>
		</ApolloProvider>
	);
}

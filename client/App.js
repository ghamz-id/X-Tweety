import { NavigationContainer } from "@react-navigation/native";
import Stack_Navigator from "./component/stack_navigators";
import client from "./config/connection";
import { ApolloProvider } from "@apollo/client";
import { AuthContext } from "./context/auth";
import { useState } from "react";
import * as SecureStore from "expo-secure-store";

export default function App() {
	const [isSignedIn, setIsSignedIn] = useState(false);
	(async () => {
		const token = await SecureStore.getItemAsync("access_token");
		if (token) {
			return setIsSignedIn(true);
		}
	})();

	return (
		<AuthContext.Provider value={{ isSignedIn, setIsSignedIn }}>
			<ApolloProvider client={client}>
				<NavigationContainer>
					<Stack_Navigator />
				</NavigationContainer>
			</ApolloProvider>
		</AuthContext.Provider>
	);
}

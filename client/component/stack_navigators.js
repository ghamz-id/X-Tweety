import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
import Login from "../screens/login_screen";
import Register from "../screens/register_screen";
import Profile from "../screens/profile_screen";
import DetailsScreen from "../screens/detail_screen";
import { useContext } from "react";
import { AuthContext } from "../context/auth";

// ICONS
import Tab_Navigator from "./tab_navigators";

export default function Stack_Navigator() {
	const { isSignedIn, setIsSignedIn } = useContext(AuthContext);
	return (
		<Stack.Navigator initialRouteName="Login">
			{isSignedIn ? (
				<>
					{/* ----- HOME ----- */}
					<Stack.Screen
						name="Tab_Menu"
						component={Tab_Navigator}
						options={{ headerShown: false }}
					/>

					{/* ----- PROFILE ----- */}
					<Stack.Screen
						name="Profile"
						component={Profile}
						options={{
							headerTransparent: true,
							title: "",
						}}
					/>

					{/* ----- DETAIL POST ----- */}
					<Stack.Screen
						name="Posting"
						component={DetailsScreen}
						options={{
							headerTitleAlign: "center",
						}}
					/>
				</>
			) : (
				<>
					{/* ----- LOGIN ----- */}
					<Stack.Screen
						name="Login"
						component={Login}
						options={{ headerShown: false }}
					/>

					{/* ----- REGISTER ----- */}
					<Stack.Screen
						name="Register"
						component={Register}
						options={{ headerShown: false }}
					/>
				</>
			)}
		</Stack.Navigator>
	);
}

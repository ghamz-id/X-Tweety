import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/login_screen";
import Register from "../screens/register_screen";
import Profile from "../screens/profile_screen";
const Stack = createNativeStackNavigator();

// ICONS
import { Ionicons } from "@expo/vector-icons";
import { Alert } from "react-native";

export default function Stack_Navigator() {
	return (
		<Stack.Navigator>
			{/* <Stack.Screen
				name="Login"
				component={Login}
				options={{ headerShown: false }}
			/> */}
			{/* <Stack.Screen
				name="Register"
				component={Register}
				options={{ headerShown: false }}
			/> */}
			<Stack.Screen
				name="Profile"
				component={Profile}
				options={{
					headerTransparent: true,
					headerTitle: () => (
						<Ionicons
							onPress={() => Alert.alert("BACK")}
							name="arrow-back"
							size={24}
							color="white"
						/>
					),
				}}
			/>
		</Stack.Navigator>
	);
}

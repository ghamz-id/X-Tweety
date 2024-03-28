import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/login_screen";
import Register from "../screens/register_screen";
const Stack = createNativeStackNavigator();

export default function Stack_Navigator() {
	return (
		<Stack.Navigator>
			{/* <Stack.Screen
				name="Login"
				component={Login}
				options={{ headerShown: false }}
			/> */}
			<Stack.Screen
				name="Register"
				component={Register}
				options={{ headerShown: false }}
			/>
		</Stack.Navigator>
	);
}

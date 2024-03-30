import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();
import { Text, Image } from "react-native";
import HomeScreen from "../screens/home_screen";
import Search from "../screens/search_screen";
import * as SecureStore from "expo-secure-store";

// ICON
import {
	Entypo,
	FontAwesome6,
	FontAwesome,
	MaterialIcons,
} from "@expo/vector-icons";
import { useContext } from "react";
import { AuthContext } from "../context/auth";

export default function Tab_Navigator({ navigation }) {
	const { setIsSignedIn } = useContext(AuthContext);
	return (
		<Tab.Navigator>
			{/* ----- HOME ----- */}
			<Tab.Screen
				name="Home"
				component={HomeScreen}
				options={{
					title: "",
					headerTitle: () => (
						<FontAwesome6 name="x-twitter" size={24} color="black" />
					),
					headerTitleAlign: "center",
					headerLeft: () => (
						<Text
							onPress={async () => {
								const id = await SecureStore.getItemAsync("id");
								navigation.navigate("Profile", { id });
							}}
							className="h-8 w-8 rounded-full mx-4 text-lg"
						>
							<Image
								className="h-8 w-8 rounded-full mx-4"
								source={{
									uri: "https://img.freepik.com/free-vector/isolated-young-handsome-man-set-different-poses-white-background-illustration_632498-649.jpg?w=740&t=st=1711613786~exp=1711614386~hmac=5b87fec659d229736cf47833ca4e3ba2301d393e8230c10aa88cbdededaba27e",
								}}
							/>
						</Text>
					),
					headerRight: () => (
						<Text
							onPress={async () => {
								await SecureStore.deleteItemAsync("access_token");
								await SecureStore.deleteItemAsync("id");
								setIsSignedIn(false);
							}}
							className="mx-4 text-lg"
						>
							<MaterialIcons name="logout" size={24} color="black" />
						</Text>
					),
					tabBarIcon: () => {
						return <Entypo name="home" size={24} color="black" />;
					},
				}}
			/>

			{/* ----- SEARCH ----- */}
			<Tab.Screen
				name="Search"
				component={Search}
				options={{
					title: "",
					headerTitle: () => (
						<FontAwesome6 name="x-twitter" size={24} color="black" />
					),
					headerTitleAlign: "center",
					headerLeft: () => (
						<Text
							onPress={async () => {
								const id = await SecureStore.getItemAsync("id");
								navigation.navigate("Profile", { id });
							}}
							className="h-8 w-8 rounded-full mx-4 text-lg"
						>
							<Image
								className="h-8 w-8 rounded-full mx-4"
								source={{
									uri: "https://img.freepik.com/free-vector/isolated-young-handsome-man-set-different-poses-white-background-illustration_632498-649.jpg?w=740&t=st=1711613786~exp=1711614386~hmac=5b87fec659d229736cf47833ca4e3ba2301d393e8230c10aa88cbdededaba27e",
								}}
							/>
						</Text>
					),
					headerRight: () => (
						<Text
							onPress={async () => {
								await SecureStore.deleteItemAsync("access_token");
								await SecureStore.deleteItemAsync("id");
								setIsSignedIn(false);
							}}
							className="mx-4 text-lg"
						>
							<MaterialIcons name="logout" size={24} color="black" />
						</Text>
					),
					tabBarIcon: () => {
						return <FontAwesome name="search" size={24} color="black" />;
					},
				}}
			/>
		</Tab.Navigator>
	);
}

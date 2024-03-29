import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();
import HomeScreen from "../screens/home_screen";
import { Alert, Text, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

// ICON
import { Entypo } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";

export default function Tab_Navigator() {
	return (
		<Tab.Navigator>
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
							onPress={() => Alert.alert("PROFILE")}
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
							onPress={() => Alert.alert("LOGOUT")}
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
		</Tab.Navigator>
	);
}

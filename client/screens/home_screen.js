import { ScrollView, View, TouchableOpacity } from "react-native";
import Card from "../component/card";

export default function HomeScreen({ navigation }) {
	return (
		<View>
			<ScrollView>
				<TouchableOpacity
					onPress={() => navigation.navigate("Posting")}
					underlayColor="#eee"
				>
					<Card />
				</TouchableOpacity>
			</ScrollView>
		</View>
	);
}

import { ScrollView, View, Alert, TouchableOpacity } from "react-native";
import Card from "../component/card";

export default function HomeScreen() {
	return (
		<View>
			<ScrollView>
				<TouchableOpacity
					onPress={() => Alert.alert("DETAIL")}
					underlayColor="#eee"
				>
					<Card />
				</TouchableOpacity>
			</ScrollView>
		</View>
	);
}

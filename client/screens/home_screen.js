import { ScrollView, View, Text } from "react-native";
import Card from "../component/card";

export default function HomeScreen() {
	return (
		<View>
			<ScrollView>
				<Card />
				<Card />
			</ScrollView>
		</View>
	);
}

import { ScrollView } from "react-native";
import Card from "../component/card";
import Comment from "../component/comment_card";

export default function DetailsScreen() {
	return (
		<ScrollView>
			<Card />
			<Comment />
		</ScrollView>
	);
}

import { ScrollView } from "react-native";
import Card from "../component/card";
import Comment from "../component/comment_card";

export default function DetailsScreen({ route }) {
	const { item } = route.params;
	return (
		<ScrollView>
			<Card item={item} />
			{item.comments.map((item, i) => (
				<Comment key={i} item={item} />
			))}
		</ScrollView>
	);
}

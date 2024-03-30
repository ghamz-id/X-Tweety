import { ActivityIndicator, ScrollView, View } from "react-native";
import Card from "../component/card";
import Comment from "../component/comment_card";
import { useQuery } from "@apollo/client";
import { GET_POST_DETAIL } from "../query/query_postDetail";

export default function DetailsScreen({ route }) {
	const { id } = route.params;
	const { loading, error, data } = useQuery(GET_POST_DETAIL, {
		variables: { id },
	});

	if (loading) {
		return (
			<View className="flex-1 items-center justify-center">
				<ActivityIndicator size="xl" color="black" />
			</View>
		);
	}

	return (
		<ScrollView>
			<Card item={data?.postById} />
			{data?.postById?.comments.map((item, i) => (
				<Comment key={i} item={item} />
			))}
		</ScrollView>
	);
}

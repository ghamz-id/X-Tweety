import {
	ScrollView,
	View,
	TouchableOpacity,
	ActivityIndicator,
} from "react-native";
import Card from "../component/card";
import { useQuery } from "@apollo/client";
import { GET_POSTS } from "../query/query_posts";
import { Modal_Post } from "../component/modal_post";

export default function HomeScreen({ navigation }) {
	const { loading, error, data } = useQuery(GET_POSTS);

	if (loading) {
		return (
			<View className="flex-1 items-center justify-center">
				<ActivityIndicator size="xl" color="black" />
			</View>
		);
	}

	return (
		<>
			<View>
				<ScrollView>
					{data?.posts?.map((item, i) => (
						<TouchableOpacity
							onPress={() => navigation.navigate("Posting", { id: item._id })}
							underlayColor="#eee"
							key={i}
						>
							<Card item={item} />
						</TouchableOpacity>
					))}
				</ScrollView>
				<Modal_Post />
			</View>
		</>
	);
}

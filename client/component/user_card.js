import { useMutation } from "@apollo/client";
import { View, Text } from "react-native";
import { ADD_FOLLOW } from "../query/mutation_follow";

export default function User_Card({ item }) {
	const [Follow, {}] = useMutation(ADD_FOLLOW);
	return (
		<View className="flex flex-row p-4 border-b border-slate-300">
			<View className="flex-1">
				<Text className="font-bold">{item.name}</Text>
				<Text>@{item.username}</Text>
			</View>
			<View>
				<Text
					onPress={() => {
						Follow({
							variables: {
								followerId: item._id,
							},
						});
					}}
					className="bg-black text-white p-2 w-24 rounded-2xl text-center"
				>
					Follow
				</Text>
			</View>
		</View>
	);
}

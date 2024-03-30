import {
	ActivityIndicator,
	ScrollView,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import User_Card from "../component/user_card";
import { useQuery } from "@apollo/client";
import { useState } from "react";
import { SEARCH_USER } from "../query/query_searchUser";
export default function Search({ navigation }) {
	const [username, setUsername] = useState("");
	const { loading, error, data } = useQuery(SEARCH_USER, {
		variables: { username },
	});

	if (loading) {
		return (
			<View className="flex-1 items-center justify-center">
				<ActivityIndicator size="xl" color="black" />
			</View>
		);
	}
	return (
		<>
			<View className="border-b border-slate-300">
				<TextInput
					className="rounded-xl px-4 h-10 border border-slate-600 m-2 "
					placeholder="Search X"
					onChangeText={setUsername}
					value={username}
				></TextInput>
			</View>
			<ScrollView>
				{data?.searchUser?.map((item) => (
					<TouchableOpacity
						key={item._id}
						onPress={() =>
							navigation.navigate("Profile", {
								id: item._id,
							})
						}
					>
						<User_Card item={item} />
					</TouchableOpacity>
				))}
			</ScrollView>
		</>
	);
}

import {
	ActivityIndicator,
	ScrollView,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import User_Card from "../component/user_card";
import { useLazyQuery } from "@apollo/client";
import { useState } from "react";
import { SEARCH_USER } from "../query/query_searchUser";
import { FontAwesome } from "@expo/vector-icons";

export default function Search({ navigation }) {
	const [username, setUsername] = useState("");
	const [GetUsername, { loading, error, data }] = useLazyQuery(SEARCH_USER);

	if (loading) {
		return (
			<View className="flex-1 items-center justify-center">
				<ActivityIndicator size="xl" color="black" />
			</View>
		);
	}
	return (
		<>
			<View className="border-b border-slate-300 flex flex-row p-3 gap-2">
				<TextInput
					className="flex-1 rounded-xl px-4 h-10 border border-slate-600"
					placeholder="Search X"
					onChangeText={setUsername}
					value={username}
				/>
				<TouchableOpacity
					onPress={() => {
						GetUsername({ variables: { username } });
					}}
					className="rounded-xl border border-white bg-slate-300 flex w-10 items-center justify-center"
				>
					<FontAwesome name="search" size={20} color="black" />
				</TouchableOpacity>
			</View>
			<ScrollView>
				{data?.searchUser?.map((item, i) => (
					<TouchableOpacity
						onPress={() =>
							navigation.navigate("Profile", {
								variables: { id: item._id },
							})
						}
						key={i}
					>
						<User_Card item={item} />
					</TouchableOpacity>
				))}
			</ScrollView>
		</>
	);
}

import { useMutation } from "@apollo/client";
import { View, Text, Image } from "react-native";
import { ADD_FOLLOW } from "../query/mutation_follow";
import { useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store";
import { SEARCH_USER } from "../query/query_searchUser";
import { GET_PROFILE } from "../query/query_getProfile";

export default function User_Card({ item }) {
	const [Follow, {}] = useMutation(ADD_FOLLOW, {
		refetchQueries: [{ query: GET_PROFILE }, SEARCH_USER],
	});

	const [userLogin, setUserLogin] = useState();
	const check = async () => {
		setUserLogin(await SecureStore.getItemAsync("id"));
	};
	useEffect(() => {
		check();
	}, []);

	const Button_Follow =
		item.follower
			.map((item) => {
				if (item.followerId === userLogin) {
					return "Unfollow";
				}
			})
			.find((item) => item === "Unfollow") === "Unfollow"
			? "Unfollow"
			: "Follow";

	return (
		<View className="flex flex-row p-4 border-b border-slate-300">
			<View className="flex-1 flex-row">
				<Image
					className="h-10 w-10 rounded-full"
					style={{ borderColor: "#ddd", borderWidth: 1 }}
					source={{
						uri: "https://img.freepik.com/free-vector/isolated-young-handsome-man-set-different-poses-white-background-illustration_632498-649.jpg?w=740&t=st=1711613786~exp=1711614386~hmac=5b87fec659d229736cf47833ca4e3ba2301d393e8230c10aa88cbdededaba27e",
					}}
				/>
				<View className="px-2">
					<Text className="font-bold">{item.name}</Text>
					<Text>@{item.username}</Text>
				</View>
			</View>
			<View>
				{userLogin !== item._id && (
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
						{Button_Follow}
					</Text>
				)}
			</View>
		</View>
	);
}

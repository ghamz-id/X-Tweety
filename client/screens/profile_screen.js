import {
	View,
	Image,
	Text,
	ActivityIndicator,
	TouchableOpacity,
	Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { GET_PROFILE } from "../query/query_getProfile";
import { useMutation, useQuery } from "@apollo/client";
import { ADD_FOLLOW } from "../query/mutation_follow";
import * as SecureStore from "expo-secure-store";
import { useEffect, useState } from "react";

export default function Profile({ route }) {
	const { id } = route.params;
	const { loading, error, data } = useQuery(GET_PROFILE, {
		variables: { id },
	});
	const user = data?.getDetail;

	const [Follow, {}] = useMutation(ADD_FOLLOW, {
		refetchQueries: [GET_PROFILE],
	});
	const GetFollow = () => {
		Follow({
			variables: {
				followerId: id,
			},
		});
	};

	const [userLogin, setUserLogin] = useState();
	const check = async () => {
		setUserLogin(await SecureStore.getItemAsync("id"));
	};
	useEffect(() => {
		check();
	}, []);

	if (loading) {
		return (
			<View className="flex-1 items-center justify-center">
				<ActivityIndicator size="xl" color="black" />
			</View>
		);
	}

	const Button_Follow =
		user.follower
			.map((item) => {
				if (item.followerId === userLogin) {
					return "Unfollow";
				}
			})
			.find((item) => item === "Unfollow") === "Unfollow"
			? "Unfollow"
			: "Follow";

	const [flag, setFlag] = useState("Following");
	const [link, setLink] = useState(user?.following_detail);
	return (
		<>
			<SafeAreaView className="flex-1">
				<View className="flex-1 border-b border-t border-slate-300">
					<Image
						className="w-full h-full"
						source={{
							uri: "https://images.unsplash.com/photo-1614850715649-1d0106293bd1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
						}}
					/>
				</View>
				<View className="absolute mt-36 px-4 z-10">
					<Image
						className="h-20 w-20 rounded-full"
						style={{ borderColor: "#fff", borderWidth: 3 }}
						source={{
							uri: "https://img.freepik.com/free-vector/isolated-young-handsome-man-set-different-poses-white-background-illustration_632498-649.jpg?w=740&t=st=1711613786~exp=1711614386~hmac=5b87fec659d229736cf47833ca4e3ba2301d393e8230c10aa88cbdededaba27e",
						}}
					/>
				</View>
				<View className="flex px-4 border-b border-slate-300">
					<TouchableOpacity>
						<View className="flex items-end py-3 w-full">
							{userLogin !== id ? (
								<Text
									onPress={GetFollow}
									className="bg-black text-white p-2 w-24 rounded-2xl text-center"
								>
									{Button_Follow}
								</Text>
							) : (
								<Text className="bg-slate-100 border border-slate-300  p-2 w-24 rounded-2xl text-center">
									Edit Profile
								</Text>
							)}
						</View>
					</TouchableOpacity>
					<View>
						<Text className="font-bold capitalize">{user?.name}</Text>
						<Text>@{user?.username}</Text>
					</View>
					<View className="flex flex-row mt-16 mb-4">
						<Pressable
							onPress={() => {
								setFlag("Following");
								setLink(user?.following_detail);
							}}
						>
							<Text className="font-bold" style={{ marginEnd: 10 }}>
								{user?.following.length} Following
							</Text>
						</Pressable>
						<Pressable
							onPress={() => {
								setFlag("Follower");
								setLink(user?.follower_detail);
							}}
						>
							<Text className="font-bold">
								{user?.follower.length} Follower
							</Text>
						</Pressable>
					</View>
				</View>
				<View className="flex-[4] items-center">
					<Text className="font-bold border-b border-slate-300 w-80 text-center p-1 bg-blue-100 mt-1 tracking-widest text-slate-600">
						{flag}
					</Text>
					{/* ---------- USER CARD ---------- */}
					{link.map((el) => (
						<View className="flex flex-row border-b w-full border-slate-300 p-4">
							<Image
								className="h-10 w-10 rounded-full"
								style={{ borderColor: "#ddd", borderWidth: 1 }}
								source={{
									uri: "https://img.freepik.com/free-vector/isolated-young-handsome-man-set-different-poses-white-background-illustration_632498-649.jpg?w=740&t=st=1711613786~exp=1711614386~hmac=5b87fec659d229736cf47833ca4e3ba2301d393e8230c10aa88cbdededaba27e",
								}}
							/>
							<View className="px-2">
								<Text className="font-bold">{el.name}</Text>
								<Text>@{el.username}</Text>
							</View>
						</View>
					))}
					{/* ---------- END USER CARD ---------- */}
				</View>
			</SafeAreaView>
		</>
	);
}

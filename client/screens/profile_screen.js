import {
	View,
	Image,
	Text,
	TouchableOpacity,
	ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useMutation, useQuery } from "@apollo/client";
import GET_PROFILE from "../query/query_getProfile";
import { useState } from "react";
import { Following_Card } from "../component/following_card";
import * as SecureStore from "expo-secure-store";
import { ADD_FOLLOW } from "../query/mutation_follow";

export default function Profile({ route }) {
	// ---------- FIND USER PROFILE ----------
	const [flag, setFlag] = useState("Following");
	const { loading, error, data } = useQuery(GET_PROFILE, {
		variables: { id: route.params.variables.id },
	});

	// ---------- POST FOLLOW ----------
	const [Follow, { loading: load }] = useMutation(ADD_FOLLOW, {
		refetchQueries: [GET_PROFILE],
	});

	// ---------- VALIDATE ----------
	const [userLogin, setUserLogin] = useState();
	(async () => {
		const check = await SecureStore.getItemAsync("id");
		return setUserLogin(check);
	})();

	if (loading || load) {
		return (
			<View className="flex-1 items-center justify-center">
				<ActivityIndicator size="xl" color="black" />
			</View>
		);
	}

	return (
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
						{userLogin !== data.getDetail._id ? (
							<Text
								onPress={() =>
									Follow({
										variables: {
											followerId: data.getDetail._id,
										},
									})
								}
								className="bg-black text-white p-2 w-24 rounded-2xl text-center font-bold"
							>
								{data.getDetail.follower
									?.map((item) => {
										if (item?.followerId === userLogin) {
											return "Unfollow";
										}
									})
									?.find((item) => item === "Unfollow") === "Unfollow"
									? "Unfollow"
									: "Follow"}
							</Text>
						) : (
							<Text className="bg-slate-100 text-slate-600 p-2 w-24 rounded-2xl text-center font-bold border border-slate-300">
								Edit Profile
							</Text>
						)}
					</View>
				</TouchableOpacity>
				<View>
					<Text className="font-bold capitalize">{data.getDetail.name}</Text>
					<Text>@{data.getDetail.username}</Text>
				</View>
				<View className="flex flex-row mt-16 mb-4">
					<TouchableOpacity onPress={() => setFlag("Following")}>
						<Text className="font-bold" style={{ marginEnd: 10 }}>
							{data.getDetail.following.length} Following
						</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => setFlag("Follower")}>
						<Text className="font-bold">
							{data.getDetail.follower.length} Follower
						</Text>
					</TouchableOpacity>
				</View>
			</View>
			<View className="flex-[4] items-center">
				<Text
					className={
						flag === "Following"
							? "font-bold border-b border-slate-300 w-80 text-center p-1 bg-blue-100 mt-1 tracking-widest text-slate-600"
							: "font-bold border-b border-slate-300 w-80 text-center p-1 bg-red-100 mt-1 tracking-widest text-slate-600"
					}
				>
					{flag}
				</Text>
				{flag === "Following"
					? data.getDetail.following_detail.map((item, i) => (
							<Following_Card key={i} item={item} />
					  ))
					: data.getDetail.follower_detail.map((item, i) => (
							<Following_Card key={i} item={item} />
					  ))}
			</View>
		</SafeAreaView>
	);
}

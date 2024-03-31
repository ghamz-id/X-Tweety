import { View, Image, Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useMutation, useQuery } from "@apollo/client";
import { POST_LIKE } from "../query/mutation_likes";
import { GET_POSTS } from "../query/query_posts";
import { GET_POST_DETAIL } from "../query/query_postDetail";
import { Modal_Comment } from "./modal_comment";
import { USER_LOGIN } from "../query/query_userLogin";
import { useState } from "react";
import * as SecureStore from "expo-secure-store";

export default function Card({ item }) {
	const [userLogin, setUserLogin] = useState();
	(async () => {
		const check = await SecureStore.getItemAsync("id");
		return setUserLogin(check);
	})();

	const id = item._id;
	const [Likes, { loading }] = useMutation(POST_LIKE, {
		refetchQueries: [{ query: GET_POST_DETAIL }, GET_POSTS],
	});
	const Like = () => {
		Likes({
			variables: { postId: id },
		});
	};

	const {
		loading: load,
		error,
		data,
	} = useQuery(USER_LOGIN, {
		variables: {
			id: userLogin,
		},
	});

	// ----------- Validasi button like -----------
	const Button_Like = item.likes
		.map((el) => {
			return el.username;
		})
		.find((user) => user === data?.getDetail?.username);

	return (
		<View className="p-3 flex flex-row border-b border-slate-300">
			{/* SIDE KIRI */}
			<View className="flex p-1">
				<Image
					className="h-10 w-10 rounded-full"
					style={{ borderColor: "#ddd", borderWidth: 1 }}
					source={{
						uri: "https://img.freepik.com/free-vector/isolated-young-handsome-man-set-different-poses-white-background-illustration_632498-649.jpg?w=740&t=st=1711613786~exp=1711614386~hmac=5b87fec659d229736cf47833ca4e3ba2301d393e8230c10aa88cbdededaba27e",
					}}
				/>
			</View>
			{/* SIDE KANAN */}
			<View className="flex-1 p-1">
				<View className="mb-2 flex flex-row items-center">
					<Text className="font-bold text-sm capitalize">
						{item?.author[0]?.name}{" "}
					</Text>
					<Text className="font-light">@{item?.author[0]?.username}</Text>
					<Text className="italic text-xs font-light">
						{" "}
						-{" "}
						{(
							(new Date().getTime() - item?.createdAt ||
								new Date() - new Date(item?.createdAt)) /
							1000 /
							3600
						).toFixed() >= 24
							? `${(
									(new Date().getTime() - item?.createdAt ||
										new Date() - new Date(item?.createdAt)) /
									1000 /
									3600 /
									24
							  ).toFixed()} Days ago`
							: `${(
									(new Date().getTime() - item?.createdAt ||
										new Date() - new Date(item?.createdAt)) /
									1000 /
									3600
							  ).toFixed()} Hours ago`}
					</Text>
				</View>
				<View>
					<Text className="flex justify-center">{item?.content}</Text>
					{item?.imgUrl && (
						<Image
							className="h-48 w-full rounded-xl mt-1 bg-cover"
							style={{ borderColor: "#ddd", borderWidth: 1 }}
							source={{
								uri: `${item?.imgUrl}`,
							}}
						/>
					)}
				</View>
				<View className="flex flex-row justify-end">
					<TouchableOpacity onPress={Like}>
						<View className="flex flex-row justify-center items-center p-2">
							{!Button_Like && (
								<AntDesign name="like2" size={20} color="black" />
							)}
							{Button_Like && (
								<AntDesign name="like1" size={20} color="#3498DB" />
							)}
							<Text> {item?.likes?.length}</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity>
						<View className="flex flex-row justify-center items-center p-2">
							<Modal_Comment id={item?._id} />
							<Text> {item?.comments?.length}</Text>
						</View>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
}

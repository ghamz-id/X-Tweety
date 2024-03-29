import { View, Image, Text, TouchableOpacity, Alert } from "react-native";
import { Feather, AntDesign } from "@expo/vector-icons";
import { POST_LIKE } from "../query/query_like";
import { useMutation } from "@apollo/client";

export default function Card({ item }) {
	const id = item._id;
	const [Likes, { loading, error, data }] = useMutation(POST_LIKE);
	const Like = () => {
		Likes({
			variables: { postId: id },
		});
	};
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
				<View className="mb-2 flex flex-row">
					<Text className="font-bold">{item.author[0].name} </Text>
					<Text>
						@{item.author[0].username} -{" "}
						{((new Date() - new Date(item.createdAt)) / 1000 / 3600).toFixed()}{" "}
						Hours Ago
					</Text>
				</View>
				<View>
					<Text>{item.content}</Text>
					<Image
						className="h-48 w-full rounded-xl mt-1 bg-cover"
						style={{ borderColor: "#ddd", borderWidth: 1 }}
						source={{
							uri: `${item.imgUrl}`,
						}}
					/>
				</View>
				<View className="flex flex-row justify-end">
					<TouchableOpacity onPress={Like}>
						<View className="flex flex-row justify-center items-center p-2">
							<AntDesign name="like2" size={20} color="black" />
							<Text> {item.likes.length}</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => Alert.alert("COMMENT")}>
						<View className="flex flex-row justify-center items-center p-2">
							<Feather name="message-circle" size={20} color="black" />
							<Text> {item.comments.length}</Text>
						</View>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
}

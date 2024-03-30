import React, { useState } from "react";
import { Alert, Modal, Text, Pressable, View, TextInput } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";
import { useMutation } from "@apollo/client";
import { POSTING } from "../query/mutation_posting";
import { GET_POSTS } from "../query/query_posts";

export const Modal_Post = () => {
	const [modalVisible, setModalVisible] = useState(false);
	const [content, setContent] = useState("");
	const [imgUrl, setImgUrl] = useState("");
	const [Posting, {}] = useMutation(POSTING, {
		refetchQueries: [GET_POSTS],
	});
	const GetPost = async () => {
		try {
			await Posting({
				variables: {
					post: {
						content: content,
						imgUrl: imgUrl,
					},
				},
			});
			setContent("");
			setImgUrl("");
			setModalVisible(!modalVisible);
		} catch (error) {
			Alert.alert(error.message);
		}
	};

	return (
		<View className="absolute right-0 bottom-0 p-5">
			{!modalVisible && (
				<Pressable onPress={() => setModalVisible(true)}>
					<FontAwesome6 name="circle-plus" size={48} color="#3498DB" />
				</Pressable>
			)}

			{/* CONTENT */}
			<Modal
				animationType="slide"
				transparent={true}
				visible={modalVisible}
				onRequestClose={() => {
					setModalVisible(!modalVisible);
				}}
			>
				<View className="flex-1 items-center justify-center p-4">
					<View
						className="w-full border border-blue-200 rounded-xl p-4 bg-slate-200"
						style={{
							shadowColor: "#000",
							shadowOffset: {
								width: 0,
								height: 2,
							},
							shadowOpacity: 0.25,
							shadowRadius: 4,
							elevation: 5,
						}}
					>
						<TextInput
							placeholder="Apa yang sedang terjadi ?"
							className="border px-5 rounded-lg h-16 border-white bg-slate-300"
							onChangeText={setContent}
							value={content}
						/>
						<Text className="font-light mt-4 italic text-xs">
							Tambahkan Image URL mu, disini... (optional)
						</Text>
						<TextInput
							placeholder="Image"
							className="border px-5 rounded-lg border-white bg-slate-300"
							onChange={setImgUrl}
							value={imgUrl}
							dataDetectorTypes="link"
						/>
						<View className="flex flex-row justify-around mt-8">
							<Pressable
								onPress={() => setModalVisible(!modalVisible)}
								className="bg-slate-600 rounded-3xl p-2 w-24"
							>
								<Text className="text-white text-center font-bold tracking-wide">
									Close
								</Text>
							</Pressable>
							<Pressable
								onPress={GetPost}
								className="bg-blue-500 rounded-3xl p-2 w-24"
							>
								<Text className="text-white text-center font-bold tracking-wide">
									Posting
								</Text>
							</Pressable>
						</View>
					</View>
				</View>
			</Modal>
		</View>
	);
};

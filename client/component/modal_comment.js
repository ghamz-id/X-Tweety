import { useState } from "react";
import { Alert, Modal, Pressable, Text, TextInput, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useMutation } from "@apollo/client";
import { ADD_COMMENT } from "../query/mutation_comment";
import { GET_POSTS } from "../query/query_posts";
import { GET_POST_DETAIL } from "../query/query_postDetail";

export const Modal_Comment = ({ id }) => {
	const [modalVisible, setModalVisible] = useState(false);
	const [content, setContent] = useState("");
	const [Comment, {}] = useMutation(ADD_COMMENT, {
		refetchQueries: [{ query: GET_POST_DETAIL }, GET_POSTS],
	});
	const GetComment = async () => {
		try {
			await Comment({
				variables: {
					content: content,
					postId: id,
				},
			});
			Alert.alert("Success add comment");
			setModalVisible(!modalVisible);
		} catch (error) {
			Alert.alert("Failed", error.message);
		}
	};
	return (
		<View>
			<Pressable onPress={() => setModalVisible(true)}>
				<Feather name="message-circle" size={20} color="black" />
			</Pressable>

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
							placeholder="Comments..."
							className="border px-5 rounded-lg h-16 border-white bg-slate-300"
							onChangeText={setContent}
							value={content}
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
								onPress={GetComment}
								className="bg-blue-500 rounded-3xl p-2 w-24"
							>
								<Text className="text-white text-center font-bold tracking-wide">
									Send
								</Text>
							</Pressable>
						</View>
					</View>
				</View>
			</Modal>
		</View>
	);
};

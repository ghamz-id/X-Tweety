import React, { useState } from "react";
import { Alert, Modal, Text, Pressable, View, TextInput } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";

export const Modal_Post = () => {
	const [modalVisible, setModalVisible] = useState(false);
	return (
		<View className="absolute right-0 bottom-0 p-5 z-10">
			<Modal
				animationType="slide"
				transparent={true}
				visible={modalVisible}
				onRequestClose={() => {
					setModalVisible(!modalVisible);
				}}
			>
				{/* CONTENT */}
				<View className="flex-1 items-center justify-center p-4">
					<View className="w-full border border-blue-200 rounded-xl p-4 bg-slate-200">
						<TextInput
							placeholder="Apa yang sedang terjadi ?"
							className="border px-5 rounded-lg h-16 border-white bg-slate-300"
						/>
						<Text className="font-light mt-4 italic">
							Tambahkan Image URL mu, disini... (optional)
						</Text>
						<TextInput
							placeholder="Image"
							className="border px-5 rounded-lg border-white bg-slate-300"
						/>
						<Pressable
							onPress={() => setModalVisible(!modalVisible)}
							className="bg-blue-500 rounded-3xl p-2 w-24 mt-2"
						>
							<Text className="text-white text-center font-bold tracking-wide">
								Posting
							</Text>
						</Pressable>
					</View>
				</View>
			</Modal>
			<Pressable onPress={() => setModalVisible(true)}>
				<FontAwesome6 name="circle-plus" size={48} color="#3498DB" />
			</Pressable>
		</View>
	);
};

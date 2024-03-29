import { View, Image, Text, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Profile() {
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
				<View className="flex items-end py-3 w-full">
					<Text
						onPress={() => Alert.alert("Following")}
						className="bg-black text-white p-2 w-24 rounded-2xl text-center"
					>
						Follow
					</Text>
				</View>
				<View>
					<Text className="font-bold">Name</Text>
					<Text>@Username</Text>
				</View>
				<View className="flex flex-row mt-16 mb-4">
					<Text className="font-bold" style={{ marginEnd: 10 }}>
						10 Following
					</Text>
					<Text className="font-bold">10 Follower</Text>
				</View>
			</View>
			<View className="flex-[4] items-center justify-center">
				<Text>Postingan</Text>
			</View>
		</SafeAreaView>
	);
}

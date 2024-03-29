import { Text, View } from "react-native";

export default function Comment() {
	return (
		<View className="flex flex-row p-4 border-b border-slate-300">
			<View className="flex-1">
				<Text className="font-bold">Username</Text>
				<Text>Content</Text>
			</View>
			<View className="flex items-center justify-center">
				<Text>1 Jam</Text>
			</View>
		</View>
	);
}

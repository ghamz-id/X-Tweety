import { Text, View } from "react-native";

export default function Comment({ item }) {
	return (
		<View className="flex flex-row p-4 border-b border-slate-300">
			<View className="flex-1">
				<Text className="font-bold">{item.username}</Text>
				<Text>{item.content}</Text>
			</View>
			<View className="flex items-center justify-center">
				<Text>
					{((new Date().getTime() - item.createdAt) / 1000 / 3600).toFixed()}{" "}
					Hours Ago
				</Text>
			</View>
		</View>
	);
}

import { Text, View } from "react-native";

export default function Comment({ item }) {
	return (
		<View className="flex flex-row p-4 border-b border-slate-300">
			<View className="flex-1">
				<Text className="font-bold">@{item.username}</Text>
				<Text>{item.content}</Text>
			</View>
			<View className="flex items-center justify-center">
				<Text className="text-xs italic font-light">
					{((new Date().getTime() - item.createdAt) / 1000 / 3600).toFixed() >=
					24
						? `${(
								(new Date().getTime() - item.createdAt) /
								1000 /
								3600 /
								24
						  ).toFixed()} Days ago`
						: `${(
								(new Date().getTime() - item.createdAt) /
								1000 /
								3600
						  ).toFixed()} Hours ago`}
				</Text>
			</View>
		</View>
	);
}

import { View, Text, Alert } from "react-native";

export default function User_Card() {
	return (
		<View className="flex flex-row p-4 border-b border-slate-300">
			<View className="flex-1">
				<Text className="font-bold">Name</Text>
				<Text>@UserName</Text>
			</View>
			<View>
				<Text
					onPress={() => Alert.alert("Following")}
					className="bg-black text-white p-2 w-24 rounded-2xl text-center"
				>
					Follow
				</Text>
			</View>
		</View>
	);
}

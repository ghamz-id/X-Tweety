import { Image, Text, View } from "react-native";

export const Following_Card = ({ item }) => {
	return (
		<View className="flex flex-row border-b w-full border-slate-300 p-4">
			<Image
				className="h-10 w-10 rounded-full"
				style={{ borderColor: "#ddd", borderWidth: 1 }}
				source={{
					uri: "https://img.freepik.com/free-vector/isolated-young-handsome-man-set-different-poses-white-background-illustration_632498-649.jpg?w=740&t=st=1711613786~exp=1711614386~hmac=5b87fec659d229736cf47833ca4e3ba2301d393e8230c10aa88cbdededaba27e",
				}}
			/>
			<View className="px-2">
				<Text className="font-bold capitalize">{item.name}</Text>
				<Text>@{item.username}</Text>
			</View>
		</View>
	);
};

import { View, Image, Text } from "react-native";

export default function Card() {
	return (
		<View className="border border-slate-300 p-3 flex flex-row">
			<View className="border flex p-1">
				<Image
					style={{ width: 50, height: 50, borderRadius: 100 }}
					source={{
						uri: "https://img.freepik.com/free-vector/isolated-young-handsome-man-set-different-poses-white-background-illustration_632498-649.jpg?w=740&t=st=1711613786~exp=1711614386~hmac=5b87fec659d229736cf47833ca4e3ba2301d393e8230c10aa88cbdededaba27e",
					}}
				/>
			</View>
			<View className="border flex-1 p-1">
				<View className="mb-2 flex flex-row">
					<Text className="font-bold">Name </Text>
					<Text>@Username </Text>
				</View>
				<View>
					<Text>Content</Text>
					<Image
						className="h-48 w-full rounded-lg"
						source={{
							uri: "https://img.freepik.com/free-vector/isolated-young-handsome-man-set-different-poses-white-background-illustration_632498-649.jpg?w=740&t=st=1711613786~exp=1711614386~hmac=5b87fec659d229736cf47833ca4e3ba2301d393e8230c10aa88cbdededaba27e",
						}}
					/>
				</View>
				<View className="flex flex-row gap-4 justify-end">
					<Text>Likes : 10</Text>
					<Text>Comments : 10</Text>
				</View>
			</View>
		</View>
	);
}

import { View, Image, Text } from "react-native";
import { Feather, AntDesign } from "@expo/vector-icons";

export default function Card() {
	return (
		<View className="p-3 flex flex-row border-b border-slate-300">
			{/* SIDE KIRI */}
			<View className="flex p-1">
				<Image
					className="h-10 w-10 rounded-full"
					style={{ borderColor: "#ddd", borderWidth: 1 }}
					source={{
						uri: "https://img.freepik.com/free-vector/isolated-young-handsome-man-set-different-poses-white-background-illustration_632498-649.jpg?w=740&t=st=1711613786~exp=1711614386~hmac=5b87fec659d229736cf47833ca4e3ba2301d393e8230c10aa88cbdededaba27e",
					}}
				/>
			</View>
			{/* SIDE KANAN */}
			<View className="flex-1 p-1">
				<View className="mb-2 flex flex-row">
					<Text className="font-bold">Name </Text>
					<Text>@Username - 1jam</Text>
				</View>
				<View>
					<Text>Text Content</Text>
					<Image
						className="h-48 w-full rounded-xl mt-1 bg-cover"
						style={{ borderColor: "#ddd", borderWidth: 1 }}
						source={{
							uri: "https://img.freepik.com/free-vector/isolated-young-handsome-man-set-different-poses-white-background-illustration_632498-649.jpg?w=740&t=st=1711613786~exp=1711614386~hmac=5b87fec659d229736cf47833ca4e3ba2301d393e8230c10aa88cbdededaba27e",
						}}
					/>
				</View>
				<View className="flex flex-row gap-5 justify-end p-2">
					<View className="flex flex-row justify-center items-center gap-1">
						<AntDesign name="like2" size={20} color="black" />
						<Text>10</Text>
					</View>
					<View className="flex flex-row justify-center items-center gap-1">
						<Feather name="message-circle" size={20} color="black" />
						<Text>10</Text>
					</View>
				</View>
			</View>
		</View>
	);
}

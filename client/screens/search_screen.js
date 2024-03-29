import { ScrollView, TextInput, View } from "react-native";
import User_Card from "../component/user_card";

export default function Search() {
	return (
		<>
			<View className="border-b border-slate-300">
				<TextInput
					className="rounded-xl px-4 h-10 border border-slate-600 m-2 "
					placeholder="Search X"
				></TextInput>
			</View>
			<ScrollView>
				<User_Card />
			</ScrollView>
		</>
	);
}

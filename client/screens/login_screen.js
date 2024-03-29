import { Text, TextInput, View, Image } from "react-native";

export default function Login({ navigation }) {
	return (
		<View className="flex-1 items-center justify-center">
			<Image
				className="h-14 w-14 rounded-full"
				source={{
					uri: "https://freelogopng.com/images/all_img/1690643640twitter-x-icon-png.png",
				}}
			/>
			<Text className="text-black font-bold tracking-widest mb-4">Tweety</Text>
			<TextInput
				placeholder="Email"
				className="border w-80 px-5 rounded-3xl h-12 border-white bg-slate-200 mt-4"
			/>
			<TextInput
				secureTextEntry={true}
				placeholder="Password"
				className="border w-80 px-5 rounded-3xl h-12 border-white bg-slate-200 mt-4"
			/>
			<View className="w-80 mt-8">
				<Text
					onPress={() => navigation.navigate("Tab_Menu")}
					className="text-center font-bold p-2 rounded-3xl bg-black text-white border border-black"
				>
					Login
				</Text>
				<Text className="text-slate-500 mt-14 text-center p-1">
					Doesn't have an account yet ?
				</Text>
				<Text
					onPress={() => navigation.navigate("Register")}
					className="text-center  font-bold p-2 border border-slate-300 rounded-3xl"
				>
					Register
				</Text>

				<Text className="mt-8 text-slate-500 text-center tracking-tight">
					Dengan mendaftar, Anda menyetujui
					<Text className="text-blue-600"> Persyaratan</Text>,
					<Text className="text-blue-600"> Kebijakan</Text>,
					<Text className="text-blue-600"> Privasi </Text>
					dan
					<Text className="text-blue-600"> Penggunaan Kuki</Text>
				</Text>
			</View>
		</View>
	);
}

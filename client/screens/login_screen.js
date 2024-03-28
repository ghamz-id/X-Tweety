import { Button, Text, TextInput, View, Alert } from "react-native";

export default function Login() {
	return (
		<View className="flex-1 items-center justify-center gap-4">
			<Text className="text-blue-600 font-bold text-2xl tracking-widest">
				Tweety
			</Text>
			<TextInput
				placeholder="Email"
				className="border w-80 px-2 rounded-lg h-10"
			/>
			<TextInput
				secureTextEntry={true}
				placeholder="Password"
				className="border w-80 px-2 rounded-lg h-10"
			/>
			<View className="w-80 rounded-lg">
				<Button title="Login" onPress={() => Alert.alert("Login Success")} />
				<Text className="mt-4 text-justify">
					Dengan mendaftar, Anda menyetujui
					<Text className="text-blue-600">
						{" "}
						Persyaratan, Kebijakan, Privasi,
					</Text>{" "}
					dan
					<Text className="text-blue-600"> Penggunaan Kuki</Text>
				</Text>
			</View>
		</View>
	);
}

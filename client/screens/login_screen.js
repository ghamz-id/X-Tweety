import { Text, TextInput, View, Alert } from "react-native";

export default function Login() {
	return (
		<View className="flex-1 items-center justify-center gap-5">
			<Text className="text-blue-600 font-bold text-2xl tracking-widest">
				Tweety
			</Text>
			<TextInput
				placeholder="Email"
				className="border w-80 px-5 rounded-3xl h-12"
			/>
			<TextInput
				secureTextEntry={true}
				placeholder="Password"
				className="border w-80 px-5 rounded-3xl h-12"
			/>
			<View className="w-80">
				<Text
					onPress={() => Alert.alert("Login")}
					className="text-center font-bold p-2 rounded-3xl bg-blue-600 text-white border border-blue-600"
				>
					Login
				</Text>
				<Text className="text-slate-500 mt-14 text-center p-1">
					Doesn't have an account yet ?
				</Text>
				<Text
					onPress={() => Alert.alert("Register")}
					className="text-center font-bold p-2 border border-slate-300  rounded-3xl"
				>
					Register
				</Text>

				<Text className="mt-4 text-justify text-slate-500">
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

import { Text, TextInput, View, Alert } from "react-native";

export default function Register() {
	return (
		<>
			<View className="flex-1 items-center justify-center">
				<Text className="text-black font-bold text-2xl tracking-widest">
					Register
				</Text>
				<TextInput
					placeholder="Name"
					className="border w-80 px-5 rounded-3xl h-12 border-white bg-slate-200 mt-4"
				/>
				<TextInput
					placeholder="Username"
					className="border w-80 px-5 rounded-3xl h-12 border-white bg-slate-200 mt-4"
				/>
				<TextInput
					placeholder="Email"
					className="border w-80 px-5 rounded-3xl h-12 border-white bg-slate-200 mt-4"
				/>
				<TextInput
					secureTextEntry={true}
					placeholder="Password"
					className="border w-80 px-5 rounded-3xl h-12 border-white bg-slate-200 mt-4"
				/>
				<Text
					onPress={() => Alert.alert("Register")}
					className="text-center font-bold p-2 mt-8 rounded-3xl bg-black text-white border border-black w-80"
				>
					Register
				</Text>
				<View className="flex flex-row mt-8">
					<Text>Already have an account ? </Text>
					<Text onPress={() => Alert.alert("Login")} style={{ color: "blue" }}>
						Login Here
					</Text>
				</View>
			</View>
		</>
	);
}

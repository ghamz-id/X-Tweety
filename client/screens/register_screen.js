import { useMutation } from "@apollo/client";
import { Text, TextInput, View, Alert, Pressable } from "react-native";
import { REGISTER } from "../query/mutation_register";
import { useState } from "react";

export default function Register({ navigation }) {
	const [name, setName] = useState("");
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const [Register, { loading, error, data }] = useMutation(REGISTER);
	const Submit = async () => {
		try {
			await Register({
				variables: {
					user: {
						name: name,
						username: username,
						email: email,
						password: password,
					},
				},
			});
			Alert.alert("Register Success");
			navigation.navigate("Login");
		} catch (error) {
			Alert.alert("Register Failed", error.message);
		}
	};
	return (
		<>
			<View className="flex-1 items-center justify-center">
				<Text className="text-black font-bold text-2xl tracking-widest">
					Register
				</Text>
				<TextInput
					placeholder="Name"
					className="border w-80 px-5 rounded-3xl h-12 border-white bg-slate-200 mt-4"
					onChangeText={setName}
					value={name}
				/>
				<TextInput
					placeholder="Username"
					className="border w-80 px-5 rounded-3xl h-12 border-white bg-slate-200 mt-4"
					onChangeText={setUsername}
					value={username}
				/>
				<TextInput
					placeholder="Email"
					className="border w-80 px-5 rounded-3xl h-12 border-white bg-slate-200 mt-4"
					onChangeText={setEmail}
					value={email}
				/>
				<TextInput
					secureTextEntry={true}
					placeholder="Password"
					className="border w-80 px-5 rounded-3xl h-12 border-white bg-slate-200 mt-4"
					onChangeText={setPassword}
					value={password}
				/>
				<Pressable className="mt-8 rounded-3xl bg-black border border-black w-80">
					<Text
						onPress={Submit}
						className="text-center font-bold p-2 text-white"
					>
						Register
					</Text>
				</Pressable>
				<View className="flex flex-row mt-8">
					<Text>Already have an account ? </Text>
					<Text
						onPress={() => navigation.navigate("Login")}
						style={{ color: "blue" }}
					>
						Login Here
					</Text>
				</View>
			</View>
		</>
	);
}

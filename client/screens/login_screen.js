import {
	Text,
	TextInput,
	View,
	Image,
	Alert,
	ActivityIndicator,
	Pressable,
} from "react-native";
import { useMutation } from "@apollo/client";
import { useContext, useState } from "react";
import * as SecureStore from "expo-secure-store";
import { AuthContext } from "../context/auth";
import { LOGIN } from "../query/mutation_login";

export default function Login({ navigation }) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { setIsSignedIn } = useContext(AuthContext);
	const [login, { loading }] = useMutation(LOGIN, {
		onCompleted: async (data) => {
			await SecureStore.setItemAsync("access_token", data?.login.access_token);
			await SecureStore.setItemAsync("id", data?.login.id);
			setIsSignedIn(true);
		},
	});

	if (loading) {
		return (
			<View className="flex-1 items-center justify-center">
				<ActivityIndicator size="xl" color="black" />
			</View>
		);
	}

	const Submit = async () => {
		try {
			const res = await login({
				variables: {
					email,
					password,
				},
			});
		} catch (error) {
			Alert.alert("Login Failed", error.message);
		}
	};

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
			<View className="w-80 mt-8">
				<Pressable className="rounded-3xl bg-black border border-black">
					<Text
						onPress={Submit}
						className="text-center font-bold p-2 text-white"
					>
						Login
					</Text>
				</Pressable>
				<Text className="text-slate-500 mt-14 text-center p-1">
					Doesn't have an account yet ?
				</Text>
				<Pressable className="border border-gray-400 rounded-3xl">
					<Text
						onPress={() => navigation.navigate("Register")}
						className="text-center font-bold p-2"
					>
						Register
					</Text>
				</Pressable>

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

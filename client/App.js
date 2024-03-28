import { NavigationContainer } from "@react-navigation/native";
import Tab_Navigator from "./component/tab_navigators";
import Stack_Navigator from "./component/stack_navigators";

export default function App() {
	return (
		<NavigationContainer>
			<Stack_Navigator />
			{/* <Tab_Navigator /> */}
		</NavigationContainer>
	);
}

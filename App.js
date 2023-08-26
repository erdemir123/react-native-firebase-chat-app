
import { NavigationContainer } from "@react-navigation/native";

import StackNavigator from "./navigations/StackNavigator";
import { NativeBaseProvider } from "native-base";

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <StackNavigator />
      </NativeBaseProvider>
    </NavigationContainer>
  );
}



import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import BottomNavigator from "../navigations/BottomNavigator";


import ChatScreen from "../screens/ChatScreen";

const Stack = createStackNavigator();

function StackNavigator() {
    return (
      <Stack.Navigator
        initialRouteName="Bottom"
        screenOptions={{
          headerShown: false,
          presentation: "",
        }}
      >
        <Stack.Screen name="Bottom" component={BottomNavigator} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen
          name="Chat"
          component={ChatScreen}
          options={{ headerTitle: "Chats-privete" }}
        />
      </Stack.Navigator>
    );
  }

export default StackNavigator;

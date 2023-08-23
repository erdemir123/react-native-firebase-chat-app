import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/Home";

import ChatScreen from "../screens/ChatScreen";

const Stack = createStackNavigator();

function HomeNavigator({ route }) {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Chat" component={ChatScreen} />
    </Stack.Navigator>
  );
}

export default HomeNavigator;

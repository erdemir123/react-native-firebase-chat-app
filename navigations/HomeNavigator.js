import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/Home";
import { useNavigation } from "@react-navigation/native";
import ChatScreen from "../screens/ChatScreen";
import { View } from "react-native";
import { Image } from "react-native";
import { Text } from "react-native";
import { useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";

const Stack = createStackNavigator();

function HomeNavigator() {
  const { navigate } = useNavigation();
  let isLoggedIn = true;
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("Register");
    } else {
      navigate("Home");
    }
  }, []);
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ presentation: "card" }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: () => (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
                justifyContent: "center",
              }}
            >
              <Ionicons name="chatbubble" size={24} color="#5887C2" />
              <Text style={{ fontSize: 20, color: "#5887C2" }}>Chats</Text>
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="Chat"
        component={ChatScreen}
        options={{ headerTitle: "Chats-privete" }}
      />
    </Stack.Navigator>
  );
}

export default HomeNavigator;

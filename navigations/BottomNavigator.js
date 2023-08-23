import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/Home";
import SettingScreen from "../screens/Setting";
import { Image, Text } from "react-native";
import { View } from "react-native";
import {
  AntDesign,
  Entypo,
  Feather,
  Foundation,
  Ionicons,
} from "@expo/vector-icons";
import HomeNavigator from "./HomeNavigator";

const Tab = createBottomTabNavigator();

function BottomNavigator() {
  return (
    <Tab.Navigator initialRouteName="Main" screenOptions={{tabBarActiveTintColor:"black"}}>
      <Tab.Screen
        name="Main"
        component={HomeNavigator}
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
              <Image
                source={require("../assets/chat.png")}
                width={24}
                height={24}
                resizeMode="cover"
                
              />
              <Text style={{fontSize:20,color:"#5887C2"}}>Chats</Text>
            </View>
          ),
          tabBarIcon: ({ focused }) => (
            <View>
              {focused ? (
                <Foundation name="home" size={24} color="#5887C2" />
              ) : (
                <Feather name="home" size={24} color="#5887C2" />
              )}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              {focused ? (
                <Ionicons name="settings" size={24} color="#5887C2" />
              ) : (
                <Feather name="settings" size={24} color="#5887C2" />
              )}
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default BottomNavigator;

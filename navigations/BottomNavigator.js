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
    <Tab.Navigator
      initialRouteName="Main"
      screenOptions={{ tabBarActiveTintColor: "black" }}
    >
      <Tab.Screen
        name="Main"
        component={HomeNavigator}
        options={{
          headerShown: false,
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
          headerTitle: "SETTINGS",
         headerTitleStyle:{color:"#5887C2"},
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

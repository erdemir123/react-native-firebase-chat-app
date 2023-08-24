import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/Home";
import SettingScreen from "../screens/Setting";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import BottomNavigator from "../navigations/BottomNavigator";

const Stack = createStackNavigator();

function StackNavigator() {
  return (
   
     <Stack.Navigator
     initialRouteName="Bottom"
     screenOptions={{
       headerShown: false,
       presentation:"modal"
     }}
   >
     <Stack.Screen name="Login" component={LoginScreen} />
     <Stack.Screen name="Register" component={RegisterScreen} />
     <Stack.Screen name="Bottom" component={BottomNavigator} />
   </Stack.Navigator>
  );
}

export default StackNavigator;

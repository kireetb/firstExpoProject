import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { theme } from "./src/core/theme";
import StartScreen from "./src/screens/StartScreen";
// import LoginScreen from "./src/screens/LoginScreen";
import Dashboard from "./src/screens/Dashboard";
import Map from "./src/components/Map";
import Direction from "./src/screens/Direction";
import MapDirections from "./src/components/MapDirections";
import ChatBot from "./src/screens/ChatBot";
import { createDrawerNavigator } from "@react-navigation/drawer";
import RiderScreen from "./src/screens/RiderScreen";
import DriverScreen from "./src/screens/DriverScreen";
import LoggedIn from "./src/screens/LoggedIn";
import Root from "./src/screens/Root";
import LoginScreen from "./src/screens/LoginScreen";
import SignupRider from "./src/screens/SignupRider";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={Root} />
          <Drawer.Screen name="Rider" component={RiderScreen} />
          <Drawer.Screen
            name="SignupRider"
            component={SignupRider}
            options={{
              drawerItemStyle: { display: "none" },
            }}
          />
          <Drawer.Screen name="Driver" component={LoginScreen} />
          <Drawer.Screen
            name="LoggedIn"
            component={LoggedIn}
            options={{
              drawerItemStyle: { display: "none" },
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

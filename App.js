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
import Rider from "./src/screens/Rider";
import Driver from "./src/screens/Driver";
import LoggedIn from "./src/screens/LoggedIn";
import Root from "./src/screens/Root";
import LoginScreen from "./src/screens/LoginScreen";
import SignupRider from "./src/screens/SignupRider";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Root">
          <Drawer.Screen name="Root" component={Root} />
          <Drawer.Screen name="Rider" component={Rider} />
          <Drawer.Screen
            name="SignupRider"
            component={SignupRider}
            options={{
              drawerItemStyle: { display: "none" },
            }}
          />
          <Drawer.Screen name="Driver" component={Driver} />
          {/* <Drawer.Screen
            name="SignupDriver"
            component={SignupDriver}
            options={{
              drawerItemStyle: { display: "none" },
            }}
          /> */}
          <Drawer.Screen
            name="LoggedIn"
            component={LoggedIn}
            options={{
              drawerItemStyle: { display: "none" },
              headerShown: false,
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

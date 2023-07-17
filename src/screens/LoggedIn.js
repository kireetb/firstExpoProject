import { createStackNavigator } from "@react-navigation/stack";
import StartScreen from "./StartScreen";
import Dashboard from "./Dashboard";
import Map from "../components/Map";
import Direction from "./Direction";
import MapDirections from "../components/MapDirections";
import ChatBot from "./ChatBot";

const Stack = createStackNavigator();

export default function LoggedIn() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="StartScreen" component={StartScreen} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="Map" component={Map} />
      <Stack.Screen name="Direction" component={Direction} />
      <Stack.Screen name="MapDirections" component={MapDirections} />
      <Stack.Screen name="ChatBot" component={ChatBot} />
    </Stack.Navigator>
  );
}

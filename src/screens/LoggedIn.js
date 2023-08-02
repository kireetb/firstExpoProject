import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import StartScreen from "./StartScreen";
import Dashboard from "./Dashboard";
import Map from "../components/Map";
import Direction from "./Direction";
import MapDirections from "../components/MapDirections";
import ChatBot from "./ChatBot";
import * as Location from "expo-location";
import { SafeAreaView, View } from "react-native";
import Header from "../components/Header";

const Stack = createStackNavigator();

export default class LoggedIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      position: {},
    };
    this.getPosition = this.getPosition.bind(this);
  }

  getPosition = async () => {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      // console.log("Location grant status: ", status);
    } catch (error) {
      console.log(error);
    }

    try {
      Location.setGoogleApiKey("AIzaSyDbaXShT7qxzdKSDfPfkq_1Lksoad40Qyc");
      const position = await Location.getCurrentPositionAsync({
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 10000,
      });
      // console.log("Current position from API: ", position);
      this.setState({ position: position });
      // console.log("State position set as: ", this.state.position);
      // navigation.navigate("Map", position);
      // await Geolocation.getCurrentPosition((info) => console.log(info));
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    console.log("Loggedin Component is mounted");
    this.listener = this.props.navigation.addListener("focus", () =>
      // this.setState({ position: { name: "kb" } })
      this.getPosition()
    );
  }

  componentWillUnmount() {
    this.listener.remove();
  }

  render() {
    console.log("Render Logged in with position: ", this.state.position);
    return (
      // <Map position={this.state.position} />
      <Stack.Navigator initialRouteName="Map">
        <Stack.Screen name="Map">
          {(props) => <Map {...props} position={this.state.position} />}
        </Stack.Screen>
        <Stack.Screen name="StartScreen" component={StartScreen} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        {/* <Stack.Screen name="Map" component={Map} /> */}
        <Stack.Screen name="Direction" component={Direction} />
        <Stack.Screen name="MapDirections" component={MapDirections} />
        <Stack.Screen name="ChatBot" component={ChatBot} />
      </Stack.Navigator>
    );
  }
}

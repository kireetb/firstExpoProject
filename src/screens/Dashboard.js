import React from "react";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import BackButton from "../components/BackButton";
import Button from "../components/Button";
import Map from "./Map";
import { View, Text } from "react-native";
import { requestLocationPermission } from "../helpers/requestLocationPermission";
import { useState } from "react";
import Geolocation from "react-native-geolocation-service";

export default function Dashboard({ navigation }) {
  const [location, setLocation] = useState(false);
  const simple = { name: "John", age: 25 };

  const onGetLocation = async () => {
    const result = await requestLocationPermission();
    console.log("Request location permission response: ", result);

    if (result) {
      Geolocation.getCurrentPosition(
        async (position) => {
          setLocation(position);
          navigation.navigate("Map", position);
        },
        async (error) => {
          // See error code charts below.
          console.log(error.code, error.message);
          setLocation(false);
          navigation.navigate("Map", false);
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
      );
    }
  };

  console.log("Dashboard location: ", location);
  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <View style={{ flex: 1 }}>
        <Button mode="contained" onPress={onGetLocation}>
          Get Location
        </Button>
      </View>
    </Background>
    //#region
    // Original code with navigation reset
    // <Background>
    //   <Logo />
    //   <Header>Let’s start</Header>
    //   <Paragraph>
    //     Your amazing app starts here. Open you favorite code editor and start
    //     editing this project.
    //   </Paragraph>
    //   <Button
    //     mode="outlined"
    //     onPress={() =>
    //       navigation.reset({
    //         index: 0,
    //         routes: [{ name: 'StartScreen' }],
    //       })
    //     }
    //   >
    //     Logout
    //   </Button>
    // </Background>

    //#endregion
  );
}

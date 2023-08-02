import React from "react";
import Background from "../components/Background";
import Button from "../components/Button";
import { View, Text } from "react-native";
import { useState } from "react";
import * as Location from "expo-location";

export default function Dashboard({ navigation }) {
  const [location, setLocation] = useState(false);
  const simple = { name: "John", age: 25 };

  const onGetLocation = async () => {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
    } catch (error) {
      console.log(error);
    }

    try {
      Location.setGoogleApiKey("AIzaSyAvmviPUsFlmyny7ckGbpHMVqBO_mKmlw4");
      const position = await Location.getCurrentPositionAsync({
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 10000,
      });
      console.log(position);
      navigation.navigate("Map", position);
      // await Geolocation.getCurrentPosition((info) => console.log(info));
    } catch (error) {
      console.log(error);
    }
  };

  console.log("Dashboard location: ", location);
  return (
    <Background>
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

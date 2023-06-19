import React from "react";
import { View, Text } from "react-native";
import MapView from "react-native-maps";
export default class Map extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <MapView
          style={{ flex: 1 }}
          initialRegion={{
            latitude: 43.7315, 
            longitude: -79.7624,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}></MapView>
      </View>
    );
  }
}


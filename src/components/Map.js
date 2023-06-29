import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { PROVIDER_GOOGLE } from "react-native-maps";

export default class Map extends React.Component {
  render() {
    const location = this.props.route.params;

    return (
      <View style={{ flex: 1 }}>
        <MapView
          style={{ flex: 1 }}
          provider={PROVIDER_GOOGLE}
          region={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1,
          }}
        >
          <Marker
            coordinate={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
            title={"Deneme"}
          />
        </MapView>
      </View>
    );
  }
}
const region = {
  latitude: 35.6762,
  longitude: 139.6503,
  latitudeDelta: 0.1,
  longitudeDelta: 0.1,
};

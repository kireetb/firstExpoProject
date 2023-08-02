import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { PROVIDER_GOOGLE } from "react-native-maps";

export default class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: null,
    };
    // this.updateLocation = this.updateLocation.bind(this);
  }

  // updateLocation = (position) => {
  //   try {
  //     console.log("Inside update location", this.state.location);
  //     this.setState({ location: { someobj: 1 } });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("Map Component did update");
    if (prevState.location != this.props.position) {
      console.log("Location before update: ", prevState.location);
      prevState.location = this.props.position;
      this.setState({ location: prevState.location });
      // this.listenerTwo = this.props.navigation.addListener("focus", () =>
      //   this.updateLocation(this.props.position)
      // );
      console.log("Location after update: ", this.state.location);
    }
  }
  // componentDidMount() {
  //   console.log("Map Component is mounted");
  //   this.listenerTwo = this.props.navigation.addListener("focus", () =>
  //     // this.setState({ position: { name: "kb" } })
  //     this.setState({ location: this.props.position })
  //   );
  // }

  // componentWillUnmount() {
  //   this.listenerTwo.remove();
  // }
  render() {
    console.log("Inside Map render with location");
    // const location = this.props.position;
    // console.log("Position prop: ", this.props.position);
    // console.log("Current Map state:", this.state);
    return (
      <View style={{ flex: 1 }}>
        {this.state.location ? (
          <MapView
            style={{ flex: 1 }}
            provider={PROVIDER_GOOGLE}
            region={{
              latitude: this.state.location.coords.latitude,
              longitude: this.state.location.coords.longitude,
              latitudeDelta: 0.1,
              longitudeDelta: 0.1,
            }}
          >
            <Marker
              coordinate={{
                latitude: this.state.location.coords.latitude,
                longitude: this.state.location.coords.longitude,
              }}
              title={"Deneme"}
            />
          </MapView>
        ) : (
          <Text>Getting location..</Text>
        )}
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

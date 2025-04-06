import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { PROVIDER_GOOGLE } from "react-native-maps";
import Background from "./Background";
import BackButton from "./BackButton";
import MapViewDirections from "react-native-maps-directions";

const { width, height } = Dimensions.get("window");
const ASPECT_RATIO = width / height;
const LATITUDE = 37.771707;
const LONGITUDE = -122.4053769;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const GOOGLE_PLACES_API_KEY = "<Google API Key>";

export default class MapDirections extends React.Component {
  constructor(props) {
    super(props);

    const params = this.props.route.params;
    // AirBnB's Office, and Apple Park
    this.state = {
      coordinates: [
        {
          latitude: params.source.lat,
          longitude: params.source.lng,
        },
        {
          latitude: params.destination.lat,
          longitude: params.destination.lng,
        },
      ],
      // Added this
      distance: null,
      duration: null,
    };

    this.mapView = null;
  }

  onMapPress = (e) => {
    this.setState({
      coordinates: [...this.state.coordinates, e.nativeEvent.coordinate],
    });
  };

  render() {
    console.log("destination ", this.state.coordinates);
    // console.log("source ", params.source);

    return (
      <View
        style={{
          ...StyleSheet.absoluteFillObject,
          flex: 1,
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <MapView
          initialRegion={{
            latitude: LATITUDE,
            longitude: LONGITUDE,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }}
          style={StyleSheet.absoluteFill}
          ref={(c) => (this.mapView = c)}
          onPress={this.onMapPress}
        >
          {/* {this.state.coordinates.map((coordinate, index) => (
          <Marker key={`coordinate_${index}`} coordinate={coordinate} />
        ))} */}
          {this.state.coordinates.length >= 2 && (
            <MapViewDirections
              origin={this.state.coordinates[0]}
              waypoints={
                this.state.coordinates.length > 2
                  ? this.state.coordinates.slice(1, -1)
                  : undefined
              }
              destination={
                this.state.coordinates[this.state.coordinates.length - 1]
              }
              apikey={GOOGLE_PLACES_API_KEY}
              strokeWidth={3}
              strokeColor="hotpink"
              optimizeWaypoints={true}
              onStart={(params) => {
                console.log(
                  `Started routing between "${params.origin}" and "${params.destination}"`
                );
              }}
              onReady={(result) => {
                console.log(`Distance: ${result.distance} km`);
                console.log(`Duration: ${result.duration} min.`);

                //Added this
                this.setState({ distance: result.distance });
                this.setState({ duration: result.duration });

                this.mapView.fitToCoordinates(result.coordinates, {
                  edgePadding: {
                    right: width / 20,
                    bottom: height / 20,
                    left: width / 20,
                    top: height / 20,
                  },
                });
              }}
              onError={(e) => {
                console.log("GOT AN ERROR", e);
              }}
            />
          )}
          {/* Added this */}
        </MapView>
        <Text>{this.state.distance} km</Text>
        <Text>{this.state.duration} min</Text>
      </View>
    );
  }
}

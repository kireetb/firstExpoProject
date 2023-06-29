import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import Button from "../components/Button";
import BackButton from "../components/BackButton";
import Background from "../components/Background";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import MapDirections from "../components/MapDirections";
import Constants from "expo-constants";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Direction({ navigation }) {
  const [source, setSource] = useState({ value: "", error: "" });
  const [destination, setDestination] = useState({ value: "", error: "" });

  const GOOGLE_PLACES_API_KEY = "AIzaSyDbaXShT7qxzdKSDfPfkq_1Lksoad40Qyc";

  const getDirection = () => {
    // console.log("Source: ", source.value.geometry.location);
    // console.log("Destination: ", destination.value.geometry.location);
    const sourceLocation = source.value.geometry.location;
    const destinationLocation = destination.value.geometry.location;
    navigation.navigate("MapDirections", {
      source: sourceLocation,
      destination: destinationLocation,
    });
  };
  return (
    <KeyboardAvoidingView
      style={{ flex: 1, flexDirection: "column", justifyContent: "center" }}
    >
      <View style={styles.row}>
        <GooglePlacesAutocomplete
          placeholder="Source"
          minLength={2}
          listViewDisplayed={false}
          query={{ key: GOOGLE_PLACES_API_KEY }}
          value={source.value === "" ? source.value.description : source.value}
          fetchDetails={true}
          onPress={(data, details = null) =>
            setSource({ value: details, error: "" })
          }
          onFail={(error) => console.log(error)}
          onNotFound={() => console.log("no results")}
        />
        <GooglePlacesAutocomplete
          placeholder="Destination"
          minLength={2}
          listViewDisplayed={false}
          query={{ key: GOOGLE_PLACES_API_KEY }}
          value={
            destination.value === ""
              ? destination.value.description
              : destination.value
          }
          destination
          fetchDetails={true}
          onPress={(data, details = null) =>
            setDestination({ value: details, error: "" })
          }
          onFail={(error) => console.log(error)}
          onNotFound={() => console.log("no results")}
        />
      </View>
      <Button mode="contained" onPress={getDirection}>
        Get Direction
      </Button>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

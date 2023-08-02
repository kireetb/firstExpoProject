import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";

export default function Home() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
      }}
    >
      <Header>Inside home for Rider/Driver</Header>
      {/* Maps in the background 
          From and to location over the maps current location
          Display total time taken and total distance covered
          Send request
      */}
    </SafeAreaView>
  );
}

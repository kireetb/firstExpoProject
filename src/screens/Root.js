import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import Background from "../components/Background";
import Logo from "../components/Logo";

export default function Root() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
      }}
    >
      <Header>Select your role from side bar</Header>
    </SafeAreaView>
  );
}

import Background from "../components/Background";
import Logo from "../components/Logo";
import Paragraph from "../components/Paragraph";
import Button from "../components/Button";

export default function StartScreen({ navigation }) {
  return (
    <Background>
      <Logo />
      <Header>Template</Header>
      <Paragraph>
        The easiest way to start with your amazing application.
      </Paragraph>
      <Button mode="contained" onPress={() => navigation.navigate("Dashboard")}>
        Current Location
      </Button>
      <Button mode="outlined" onPress={() => navigation.navigate("Direction")}>
        Get Directions
      </Button>
      <Button mode="outlined" onPress={() => navigation.navigate("ChatBot")}>
        Talk to Bot
      </Button>
    </Background>
  );
}

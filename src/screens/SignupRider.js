import { React, useState } from "react";
import Header from "../components/Header";
import Button from "../components/Button";
import { SafeAreaView } from "react-native-safe-area-context";
import TextInput from "../components/TextInput";
import { emailValidator } from "../helpers/emailValidator";
import { passwordValidator } from "../helpers/passwordValidator";
import axios from "axios";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

export default function SignupRider({ navigation }) {
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });
  const [name, setName] = useState({ value: "", error: "" });
  const [username, setUsername] = useState({ value: "", error: "" });

  const onSignupPressed = async () => {
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);

    setEmail({ ...email, error: emailError });
    setPassword({ ...password, error: passwordError });
    setName({ ...name });
    setUsername({ ...username });
    if (emailError === "" && passwordError === "") {
      await axios
        .post("http://192.168.2.19:3000/rider", {
          email: email.value,
          password: password.value,
          name: name.value,
          username: username.value,
        })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error.response.data);
        });
      navigation.navigate("LoggedIn", { screen: "StartScreen" });
    }
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
      }}
    >
      <Header>Welcome back.</Header>
      <TextInput
        label="Name"
        returnKeyType="next"
        value={name.value}
        onChangeText={(text) => setName({ value: text, error: "" })}
      />
      <TextInput
        label="Username"
        returnKeyType="next"
        value={username.value}
        onChangeText={(text) => setUsername({ value: text, error: "" })}
      />
      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: "" })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: "" })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      <Button mode="contained" onPress={onSignupPressed}>
        Sign Up
      </Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  forgotPassword: {
    width: "100%",
    alignItems: "flex-end",
    marginBottom: 24,
  },
});

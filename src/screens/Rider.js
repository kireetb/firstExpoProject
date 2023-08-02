import React from "react";
import Header from "../components/Header";
import Button from "../components/Button";
import { theme } from "../core/theme";
import { SafeAreaView } from "react-native-safe-area-context";
import TextInput from "../components/TextInput";
import { emailValidator } from "../helpers/emailValidator";
import { passwordValidator } from "../helpers/passwordValidator";
import axios from "axios";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

export default class Rider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: { value: "", error: "" },
      password: { value: "", error: "" },
      riderselected: false,
      type: this.constructor.name.toLowerCase(),
    };
    this.setEmail = this.setEmail.bind(this);
    this.setPassword = this.setPassword.bind(this);
  }

  setEmail = (email) => {
    this.setState((prevState) => ({
      email: { value: email.value, error: email.error },
    }));
  };

  setPassword = (password) => {
    this.setState((prevState) => ({
      password: { value: password.value, error: password.error },
    }));
  };

  onLoginPressed = async () => {
    const emailError = emailValidator(this.state.email.value);
    const passwordError = passwordValidator(this.state.password.value);

    this.setEmail({ ...this.state.email, error: emailError });
    this.setPassword({ ...this.state.password, error: passwordError });

    if (emailError === "" && passwordError === "") {
      const name = this.constructor.name;
      console.log("Awaiting response from express..");
      await axios
        .get(
          "http://192.168.2.19:3000/" +
            name.toLowerCase() +
            "/" +
            this.state.email.value +
            "/" +
            this.state.password.value
        )
        .then((response) => {
          console.log(response.data);
          this.state.riderselected = true;
          this.props.navigation.navigate("LoggedIn", { screen: "LoggedIn" });
        })
        .catch((error) => {
          console.log(error.response.data);
          this.setPassword({
            ...this.state.password,
            error: error.response.data.error,
          });
        });
    }
  };

  render() {
    // console.log(this.constructor.name);
    // if (!this.state.riderselected) {
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
          label="Email"
          returnKeyType="next"
          value={this.state.email.value}
          onChangeText={(text) => this.setEmail({ value: text, error: "" })}
          error={!!this.state.email.error}
          errorText={this.state.email.error}
          autoCapitalize="none"
          autoCompleteType="email"
          textContentType="emailAddress"
          keyboardType="email-address"
        />
        <TextInput
          label="Password"
          returnKeyType="done"
          value={this.state.password.value}
          onChangeText={(text) => this.setPassword({ value: text, error: "" })}
          error={!!this.state.password.error}
          errorText={this.state.password.error}
          secureTextEntry
        />
        <View style={styles.forgotPassword}>
          <TouchableOpacity
            onPress={() => navigation.navigate("ResetPasswordScreen")}
          >
            <Text style={styles.forgot}>Forgot your password?</Text>
          </TouchableOpacity>
        </View>
        <Button mode="contained" onPress={this.onLoginPressed}>
          Login
        </Button>
        <View style={styles.row}>
          <Text>Don’t have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("SignupRider")}>
            <Text style={styles.link}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
    // } else {
    //   return (
    //     <SafeAreaView
    //       style={{
    //         flex: 1,
    //         alignItems: "center",
    //         justifyContent: "center",
    //         padding: 20,
    //       }}
    //     >
    //       <Header>When Rider is selected</Header>
    //     </SafeAreaView>
    //   );
    // }
  }
}

const styles = StyleSheet.create({
  forgotPassword: {
    width: "100%",
    alignItems: "flex-end",
    marginBottom: 24,
  },
  forgot: {
    fontSize: 13,
    color: theme.colors.secondary,
  },
  row: {
    flexDirection: "row",
    marginTop: 4,
  },
  link: {
    fontWeight: "bold",
    color: theme.colors.primary,
  },
});

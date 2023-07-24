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

// export default function RiderScreen({ navigation }) {
//   const [email, setEmail] = useState({ value: "", error: "" });
//   const [password, setPassword] = useState({ value: "", error: "" });

// const onLoginPressed = async () => {
//   const emailError = emailValidator(email.value);
//   const passwordError = passwordValidator(password.value);

//   setEmail({ ...email, error: emailError });
//   setPassword({ ...password, error: passwordError });

//   if (emailError === "" && passwordError === "") {
//     await axios
//       .get("http://192.168.2.19:3000/rider/" + email.value, {
//         email: email.value,
//         password: password.value,
//       })
//       .then((response) => {
//         console.log(response.data);
//       })
//       .catch((error) => {
//         console.log(error.response.data);
//       });
//     // navigation.navigate("LoginRider", { screen: "LoginRider" });
//   }
// };

//   return (
//     <SafeAreaView
//       style={{
//         flex: 1,
//         alignItems: "center",
//         justifyContent: "center",
//         padding: 20,
//       }}
//     >
//       <Header>Welcome back.</Header>
//       <TextInput
//         label="Email"
//         returnKeyType="next"
//         value={email.value}
//         onChangeText={(text) => setEmail({ value: text, error: "" })}
//         error={!!email.error}
//         errorText={email.error}
//         autoCapitalize="none"
//         autoCompleteType="email"
//         textContentType="emailAddress"
//         keyboardType="email-address"
//       />
//       <TextInput
//         label="Password"
//         returnKeyType="done"
//         value={password.value}
//         onChangeText={(text) => setPassword({ value: text, error: "" })}
//         error={!!password.error}
//         errorText={password.error}
//         secureTextEntry
//       />
//       <View style={styles.forgotPassword}>
//         <TouchableOpacity
//           onPress={() => navigation.navigate("ResetPasswordScreen")}
//         >
//           <Text style={styles.forgot}>Forgot your password?</Text>
//         </TouchableOpacity>
//       </View>
//       <Button mode="contained" onPress={onLoginPressed}>
//         Login
//       </Button>
//       <View style={styles.row}>
//         <Text>Don’t have an account? </Text>
//         <TouchableOpacity onPress={() => navigation.navigate("SignupRider")}>
//           <Text style={styles.link}>Sign up</Text>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// }

export default class RiderScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: { value: "", error: "" },
      password: { value: "", error: "" },
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

  render() {
    console.log(this.constructor.name);
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
        <Button mode="contained" onPress={() => console.log("Login pressed")}>
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

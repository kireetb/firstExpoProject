import { React, useState } from "react";
import Header from "../components/Header";
import Button from "../components/Button";
import { SafeAreaView } from "react-native-safe-area-context";
import TextInput from "../components/TextInput";
import { emailValidator } from "../helpers/emailValidator";
import { passwordValidator } from "../helpers/passwordValidator";
import axios from "axios";

export default function HomeScreen({ navigation }) {
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });
  const [name, setName] = useState({ value: "", error: "" });
  const [username, setUsername] = useState({ value: "", error: "" });

  const onSignupPressed = async () => {
    console.log("email value", email.value);
    console.log("pass value", password.value);
    // const emailError = emailValidator(email.value);
    // const passwordError = passwordValidator(password.value);

    setEmail({ ...email });
    setPassword({ ...password });
    setName({ ...name });
    setUsername({ ...username });
    console.log("Inside if condition");
    try {
      const response = await axios.post("http://192.168.2.19:3000/rider", {
        email: email.value,
        password: password.value,
        name: name.value,
        username: username.value,
      });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
    return;
    // }
    // console.log(email);
    // console.log(password);
    // console.log(name);
    // console.log(username);
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

// export function CustomDrawerContent(props) {
//   return (
//     <DrawerContentScrollView {...props}>
//       <DrawerItemList {...props} />
//       <DrawerItem
//         label="Close drawer"
//         onPress={() => props.navigation.closeDrawer()}
//       />
//       <DrawerItem
//         label="Toggle drawer"
//         onPress={() => props.navigation.toggleDrawer()}
//       />
//     </DrawerContentScrollView>
//   );
// }

// const Drawer = createDrawerNavigator();

// export default function StartScreen({ navigation }) {
//   return (
//     <>
//       <Drawer.Navigator
//         initialRouteName="Home"
//         useLegacyImplementation
//         drawerContent={(props) => <CustomDrawerContent {...props} />}
//       >
//         <Drawer.Screen name="Home" component={HomeScreen} />
//         <Drawer.Screen name="Notifications" component={NotificationsScreen} />
//       </Drawer.Navigator>
//     </>
//     // <>
//     //   <Text>Start Screen</Text>
//     // </>
//   );
// }

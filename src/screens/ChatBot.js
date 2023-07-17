import React, { useState } from "react";
import axios from "axios";
import TextInput from "../components/TextInput";
import Header from "../components/Header";
import Background from "../components/Background";
import Button from "../components/Button";
import { TouchableOpacity, View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";

export default function ChatBot({ navigation }) {
  const [message, setMessage] = useState({ value: "" });
  const [botReply, setBotReply] = useState("");

  const handleChat = async () => {
    try {
      const response = await axios.post("http://192.168.2.19:3000/chat", {
        message,
      });
      console.log("Reply from backend: ", response);
      setBotReply(response.data.reply.content);
    } catch (error) {
      console.error(error);
    }
  };

  console.log("Ques value: ", message.value);
  return (
    <Background>
      <Header>Chat Bot</Header>
      {/* <View style={styles.forgotPassword}>
        <TouchableOpacity
          onPress={() => navigation.navigate("ResetPasswordScreen")}
        >
          <Text style={styles.forgot}>Forgot your password?</Text>
        </TouchableOpacity>
      </View> */}
      <TextInput
        label="input"
        returnKeyType="next"
        value={message.value}
        onChangeText={(text) => setMessage({ value: text })}
      ></TextInput>
      <Text>{botReply}</Text>
      <Button mode="contained" onPress={handleChat}>
        Send
      </Button>
    </Background>
  );
}

const styles = StyleSheet.create({
  forgotPassword: {
    width: "100%",
    alignItems: "flex-end",
    marginBottom: 24,
  },
});

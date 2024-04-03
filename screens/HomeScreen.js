// Welcome Screen
import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";
import CustomButton from "../components/CustomButton";
import { ButtonType } from "../components/CustomButton";

export default function WelcomeScreen({ navigation }) {
  return (
    <ActionSheetProvider>
      <SafeAreaView style={styles.container}>
        <ImageBackground
          style={styles.background}
          source={require("../assets/r.png")}
          resizeMode="cover"
        >
          <CustomButton
            title="Self Assesment Questions"
            type={ButtonType.PRIMARY}
            onPress={() => navigation.navigate("Self Assesment Questions")}
          />
          <CustomButton
            title="Traditional Journal Entry"
            type={ButtonType.SECONDARY}
            onPress={() => navigation.navigate("Journal Entry")}
          />
        </ImageBackground>
      </SafeAreaView>
    </ActionSheetProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: "center",
  },
  centeredContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 30,
    margin: 10,
    fontWeight: "bold",
    color: "grey",
  },
  buttonContainer: {
    width: "83%",
    alignItems: "center",
    flexDirection: "row",
  },
  footerText: {
    textAlign: "center",
    marginBottom: 20,
    color: "blue",
  },
});

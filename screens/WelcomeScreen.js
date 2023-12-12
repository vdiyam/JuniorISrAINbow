// Welcome Screen
import React from "react";
import { View, Text, Image, StyleSheet, SafeAreaView } from "react-native";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";
import CustomButton from "../components/CustomButton";
import { ButtonType } from "../components/CustomButton";
export default function WelcomeScreen({ navigation }) {
  return (
    <ActionSheetProvider>
      <SafeAreaView style={styles.container}>
        <Image
          style={styles.image1}
          source={require("../assets/top.png")}
          resizeMode="contain"
        />
        <Text style={styles.text}>Welcome to Rearrange</Text>
        <View style={styles.buttonContainer}>
          <CustomButton
            title="Sign Up"
            type={ButtonType.PRIMARY}
            onPress={() => navigation.navigate("Perosnal Information")}
          />
          <CustomButton title="Log In" type="secondary" />
        </View>
        <Image
          style={styles.image2}
          source={require("../assets/bottom.png")}
          resizeMode="contain"
        />
      </SafeAreaView>
    </ActionSheetProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCD19C",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
  },
  image1: {
    width: 600,
    height: 220,
  },
  image2: {
    width: 600,
    height: 260,
  },
  text: {
    fontSize: 30,
    margin: 10,
    fontWeight: "bold",
  },
  buttonContainer: {
    width: "83%",
    alignItems: "center",
    flexDirection: "row",
  },
});

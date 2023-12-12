// Review Screen
import React from "react";
import { SafeAreaView, Text, StyleSheet, View } from "react-native";
import CustomButton from "../components/CustomButton";

export default function SummaryScreen({ route, navigation }) {
  // Extract the props from the routing
  const { name, username, email, age, goal, aesthetic, location } =
    route.params;
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.text}>Review Your Details</Text>
        <Text style={styles.subtitle}>
          You can make edits by going back to the screen you entered the detail.
        </Text>

        <Text style={styles.details}>Name: {name} </Text>
        <Text style={styles.details}>Username: {username}</Text>
        <Text style={styles.details}>Email: {email}</Text>
        <Text style={styles.details}>Age: {age} years old</Text>
        <Text style={styles.details}>Room Goal: {goal}</Text>
        <Text style={styles.details}>Rom Aesthetic: {aesthetic}</Text>
        <Text style={styles.details}>Your Location: {location}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton
          title="Sign Up"
          type="primary"
          onPress={() => {
            navigation.navigate("Welcome");
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "#FCD19C",
  },
  centerContainer: {
    alignItems: "center",
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 17,
    color: "#656565",
    marginBottom: 12,
    textAlign: "center",
  },
  details: {
    fontSize: 18,
    color: "#9747FF",
    fontWeight: "bold",
    padding: 10,
  },
  buttonContainer: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
});

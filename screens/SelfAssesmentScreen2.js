import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function SelfAssessmentScreen({ navigation }) {
  const [rating, setRating] = useState(null);

  const handleNext = () => {
    if (rating !== null) {
      console.log("Rating selected:", rating);
      navigation.navigate("SelfAssessmentScreen3");
    } else {
      alert("Please select a rating before proceeding.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.question}>
        How would you rate your mental health?
      </Text>
      <View style={styles.ratingContainer}>
        <TouchableOpacity
          style={[
            styles.button,
            { backgroundColor: rating === 1 ? "#87CEFA" : "#87CEFA" },
          ]}
          onPress={() => setRating(1)}
        >
          <Text style={styles.buttonText}>1. Very Bad</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            { backgroundColor: rating === 2 ? "#87CEEB" : "skyblue" },
          ]}
          onPress={() => setRating(2)}
        >
          <Text style={styles.buttonText}>2. Bad</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            { backgroundColor: rating === 3 ? "#0000FF" : "blue" },
          ]}
          onPress={() => setRating(3)}
        >
          <Text style={styles.buttonText}>3. Neither Good nor Bad</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            { backgroundColor: rating === 4 ? "#000080" : "navy" },
          ]}
          onPress={() => setRating(4)}
        >
          <Text style={styles.buttonText}>4. Good</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            { backgroundColor: rating === 5 ? "#191970" : "midnightblue" },
          ]}
          onPress={() => setRating(5)}
        >
          <Text style={styles.buttonText}>5. Very Good</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.navButton}
        >
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleNext} style={styles.navButton}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  question: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  ratingContainer: {
    marginBottom: 20,
  },
  button: {
    backgroundColor: "lightgray",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    height: 40,
    width: 300,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  navButton: {
    backgroundColor: "lightgray",
    padding: 10,
    borderRadius: 5,
    width: 100,
    alignItems: "center",
  },
});

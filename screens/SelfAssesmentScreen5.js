import { useState } from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Button,
} from "react-native";
import CustomButton from "../components/CustomButton";
import { ButtonType } from "../components/CustomButton";

export default function SelfAssesmentScreen5({ navigation }) {
  const [rating, setRating] = useState(null);

  const handleNext = () => {
    if (rating !== null) {
      // If rating is selected, navigate to the next screen
      navigation.navigate("SelfAssessmentScreen6");
    } else {
      // If rating is not selected, show an alert or message prompting user to select a rating
      alert("Please select a rating before proceeding.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.question}>Question 1: How was your day?</Text>
      <View style={styles.ratingContainer}>
        <Button title="1. Very Bad" onPress={() => setRating(1)} />
        <Button title="2. Bad" onPress={() => setRating(2)} />
        <Button title="3. Neutral" onPress={() => setRating(3)} />
        <Button title="4. Good" onPress={() => setRating(4)} />
        <Button title="5. Very Good" onPress={() => setRating(5)} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Back" onPress={() => navigation.goBack()} />
        <Button title="Next" onPress={handleNext} />
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
    flexDirection: "row",
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
});

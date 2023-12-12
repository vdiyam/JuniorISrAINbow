// Goals Screen
import { useState } from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";
import CustomButton from "../components/CustomButton";
import { ButtonType } from "../components/CustomButton";
export default function GoalsScreen({ route, navigation }) {
  const { name, username, email, age } = route.params;

  const [selectedGoal, setSelectedGoal] = useState("");
  const [error, setError] = useState("");

  const handleSelectGoal = (goal) => {
    setSelectedGoal(goal);
    setError("");
    console.log("Selected Goal:", goal);
  };

  const handleContinue = () => {
    if (selectedGoal) {
      console.log("Selected Goal:", selectedGoal);

      navigation.navigate("Room Aesthetic", {
        name: name,
        username: username,
        email: email,
        age: age,
        goal: selectedGoal,
      });
    } else {
      setError("Please select a room goal");
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.centerContainer}>
          <Text style={styles.text}>What is your room goal?</Text>
          <Text style={styles.subtitle}>Choose only one:</Text>
        </View>
        <TouchableOpacity
          style={[
            styles.option,
            selectedGoal === "Rearrange" && styles.selectedOption,
          ]}
          onPress={() => handleSelectGoal("Rearrange")}
        >
          <View style={styles.circle} />
          <Text style={styles.optionText}>Rearrange</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.option,
            selectedGoal === "Decorate" && styles.selectedOption,
          ]}
          onPress={() => handleSelectGoal("Decorate")}
        >
          <View style={styles.circle} />
          <Text style={styles.optionText}>Decorate</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.option,
            selectedGoal === "Both" && styles.selectedOption,
          ]}
          onPress={() => handleSelectGoal("Both")}
        >
          <View style={styles.circle} />
          <Text style={styles.optionText}>Both</Text>
        </TouchableOpacity>
      </View>
      {error ? <Text style={styles.errorText}>{error}</Text> : null}

      <View style={styles.buttonContainer}>
        <CustomButton
          title="Next"
          type={ButtonType.PRIMARY}
          onPress={handleContinue}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    padding: 10,
    backgroundColor: "#FCD19C",
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 17,
    color: "#656565",
    marginBottom: 12,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    padding: 10,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#BBBBBB",
  },
  optionText: {
    fontSize: 18,
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#9747FF",
    marginRight: 10,
  },
  buttonContainer: {
    paddingHorizontal: 16,
    marginBottom: 24,
    padding: 10,
  },
  errorText: {
    color: "red",
    marginBottom: 8,
  },
  centerContainer: {
    alignItems: "center",
  },
  selectedOption: {
    backgroundColor: "#E4CCFF",
  },
});

// Aesthetic Screen
import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";
import CustomButton from "../components/CustomButton";
import { ButtonType } from "../components/CustomButton";
export default function AestheticScreen({ route, navigation }) {
  const { name, username, email, age, goal } = route.params;
  const [selectedAesthetic, setSelectedAesthetic] = useState("");
  const [error, setError] = useState("");

  const handleSelectAesthetic = (aesthetic) => {
    setSelectedAesthetic(aesthetic);
    setError("");
    console.log("Selected Aesthetic:", aesthetic);
  };

  const handleContinue = () => {
    if (selectedAesthetic) {
      console.log("Selected Aesthetic:", selectedAesthetic);
      navigation.navigate("Your Location", {
        name: name,
        username: username,
        email: email,
        age: age,
        goal: goal,
        aesthetic: selectedAesthetic,
      });
    } else {
      setError("Please select a room aesthetic");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.centerContainer}>
          <Text style={styles.text}>Choose your aesthetic.</Text>
          <Text style={styles.subtitle}>
            Pick one. There will be a more detailed quiz once you’re logged in.
          </Text>
        </View>

        <TouchableOpacity
          style={[
            styles.option,
            selectedAesthetic === "Indie" && styles.selectedOption,
          ]}
          onPress={() => handleSelectAesthetic("Indie")}
        >
          <View style={styles.circle} />
          <Text style={styles.optionText}>Indie</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.option,
            selectedAesthetic === "Soft/Clean" && styles.selectedOption,
          ]}
          onPress={() => handleSelectAesthetic("Soft/Clean")}
        >
          <View style={styles.circle} />
          <Text style={styles.optionText}>Soft/Clean</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.option,
            selectedAesthetic === "Bohemian" && styles.selectedOption,
          ]}
          onPress={() => handleSelectAesthetic("Bohemian")}
        >
          <View style={styles.circle} />
          <Text style={styles.optionText}>Bohemian</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.option,
            selectedAesthetic === "Pastel" && styles.selectedOption,
          ]}
          onPress={() => handleSelectAesthetic("Pastel")}
        >
          <View style={styles.circle} />
          <Text style={styles.optionText}>Pastel</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.option,
            selectedAesthetic === "Dark" && styles.selectedOption,
          ]}
          onPress={() => handleSelectAesthetic("Dark")}
        >
          <View style={styles.circle} />
          <Text style={styles.optionText}>Dark</Text>
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
  centerContainer: {
    alignItems: "center",
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
    fontSize: 20,
    marginLeft: 10,
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
  },
  errorText: {
    color: "red",
    marginBottom: 8,
  },
  selectedOption: {
    backgroundColor: "#E4CCFF",
  },
});

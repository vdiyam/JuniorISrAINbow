import {
  SafeAreaView,
  Text,
  TextInput,
  StyleSheet,
  View,
  Button,
} from "react-native";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CustomButton from "../components/CustomButton";
import { ButtonType } from "../components/CustomButton";

export default function JournalEntryScreen({ navigation }) {
  const [journalEntry, setJournalEntry] = useState("");

  const saveJournalEntry = async () => {
    try {
      await AsyncStorage.setItem("journalEntry", journalEntry);
      alert("Journal entry saved successfully!");
    } catch (error) {
      console.error("Error saving journal entry:", error);
      alert("Failed to save journal entry.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Traditional Journal Entry</Text>
      <TextInput
        style={styles.input}
        placeholder="Write your journal entry here..."
        multiline={true}
        numberOfLines={8}
        value={journalEntry}
        onChangeText={(text) => setJournalEntry(text)}
      />
      <View style={styles.buttonContainer}>
        <Button title="Save" onPress={saveJournalEntry} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 200,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 20,
  },
  buttonContainer: {
    width: "50%",
  },
});

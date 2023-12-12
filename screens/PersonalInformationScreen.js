// Personal Information Screen
import RNDateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";
import CustomButton from "../components/CustomButton";
import { ButtonType } from "../components/CustomButton";
import { View, Text, TextInput, StyleSheet, SafeAreaView } from "react-native";
export default function PersonalInformationScreen({ navigation }) {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState(new Date());

  const [nameError, setNameError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [dateError, setDateError] = useState("");

  // Error Handling
  const validateFields = () => {
    let isValid = true;

    if (!name.trim()) {
      setNameError("Name is required");
      isValid = false;
    } else {
      setNameError("");
    }

    if (!username.trim()) {
      setUsernameError("Username is required");
      isValid = false;
    } else {
      setUsernameError("");
    }

    if (!email.trim()) {
      setEmailError("Email is required");
      isValid = false;
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        setEmailError("Enter a valid email address");
        isValid = false;
      } else {
        setEmailError("");
      }
    }

    return isValid;
  };

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
    setDateError("");
    console.log("Date entered:", currentDate);
  };

  // Calculating Age
  const calculateAge = (birthday) => {
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.centerContainer}>
          <Text style={styles.title}>Personal Details</Text>
        </View>
        <View style={styles.rowContainer}>
          <Text style={styles.text}>Name: </Text>
          <TextInput
            value={name}
            style={styles.input}
            placeholder="Enter your name"
            onChangeText={setName}
          />
        </View>
        <Text style={styles.errorText}>{nameError}</Text>

        <View style={styles.rowContainer}>
          <Text style={styles.text}>Username: </Text>
          <TextInput
            value={username}
            style={styles.input}
            placeholder="Enter your username"
            onChangeText={setUsername}
          />
        </View>
        <Text style={styles.errorText}>{usernameError}</Text>

        <View style={styles.rowContainer}>
          <Text style={styles.text}>Email: </Text>
          <TextInput
            value={email}
            style={styles.input}
            placeholder="example@email.com"
            onChangeText={setEmail}
          />
        </View>
        <Text style={styles.errorText}>{emailError}</Text>

        <View style={styles.rowContainer}>
          <Text style={styles.text}>Birthday: </Text>
          <RNDateTimePicker value={date} onChange={onChangeDate} />
          <Text style={styles.errorText}>{dateError}</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton
          title="Next"
          type={ButtonType.PRIMARY}
          onPress={() => {
            if (validateFields()) {
              navigation.navigate("Room Goals", {
                name: name,
                username: username,
                email: email,
                age: calculateAge(date),
              });

              console.log("Name entered:", name);
              console.log("Username entered:", username);
              console.log("Email entered:", email);
              console.log("Date entered:", date);
            }
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  topContainer: {
    padding: 16,
  },
  container: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "#FCD19C",
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 16,
    margin: 10,
  },
  centerContainer: {
    alignItems: "center",
  },
  input: {
    flex: 1,
    fontSize: 20,
    padding: 5,
    borderColor: "#BBBBBB",
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: "#E4CCFF",
  },
  buttonContainer: {
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  errorText: {
    color: "red",
    marginBottom: 8,
  },
});

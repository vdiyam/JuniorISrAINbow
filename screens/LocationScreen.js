// Location Screen
import { SafeAreaView, Text, StyleSheet, View } from "react-native";
import { useEffect, useState } from "react";
import CustomButton from "../components/CustomButton";
import { ButtonType } from "../components/CustomButton";
import * as Location from "expo-location";
export default function LocationScreen({ route, navigation }) {
  const { name, username, email, age, goal, aesthetic } = route.params;
  const [city, setCity] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      Location.reverseGeocodeAsync(location.coords).then((result) => {
        setCity(result[0].city);
      });
    })();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.text}>Add Your Location</Text>
        <Text style={styles.subtitle}>You must enable location services.</Text>
        <Text style={styles.main}>
          {city ? `You are in ${city}.` : "Fetching location..."}
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <CustomButton
          title="Summary"
          type={ButtonType.PRIMARY}
          onPress={() =>
            navigation.navigate("Summary", {
              name: name,
              username: username,
              email: email,
              age: age,
              goal: goal,
              aesthetic: aesthetic,
              location: city,
            })
          }
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
  innerContainer: {
    alignItems: "center",
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    justifyContent: "center",
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
    color: "#656565",
    marginBottom: 12,
  },
  main: {
    fontSize: 20,
    marginLeft: 10,
    color: "#9747FF",
    fontWeight: "bold",
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

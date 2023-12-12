import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "./screens/WelcomeScreen";
import PersonalInformationScreen from "./screens/PersonalInformationScreen";
import GoalsScreen from "./screens/GoalsScreen";
import AestheticsScreen from "./screens/AestheticsScreen";
import LocationScreen from "./screens/LocationScreen";
import SummaryScreen from "./screens/ReviewScreen";

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen
          name="Perosnal Information"
          component={PersonalInformationScreen}
        />
        <Stack.Screen name="Room Goals" component={GoalsScreen} />
        <Stack.Screen name="Room Aesthetic" component={AestheticsScreen} />
        <Stack.Screen name="Your Location" component={LocationScreen} />
        <Stack.Screen name="Summary" component={SummaryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

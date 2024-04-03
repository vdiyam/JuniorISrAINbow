import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import SelfAssesmentScreen from "./screens/SelfAssesmentScreen";
import GoalsScreen from "./screens/GoalsScreen";
import AestheticsScreen from "./screens/AestheticsScreen";
import JournalEntryScreen from "./screens/JournalEntryScreen";
import SummaryScreen from "./screens/ReviewScreen";

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="Self Assesment Questions"
          component={SelfAssesmentScreen}
        />
        <Stack.Screen name="Journal Entry" component={JournalEntryScreen} />
        {/* 
        <Stack.Screen name="Room Aesthetic" component={AestheticsScreen} />
        <Stack.Screen name="Your Location" component={LocationScreen} />
        <Stack.Screen name="Summary" component={SummaryScreen} /> */}
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

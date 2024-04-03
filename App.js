import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import JournalEntryScreen from "./screens/JournalEntryScreen";
import SelfAssesmentScreen from "./screens/SelfAssesmentScreen";
import SelfAssesmentScreen2 from "./screens/SelfAssesmentScreen2";
import SelfAssesmentScreen3 from "./screens/SelfAssesmentScreen3";
import SelfAssesmentScreen4 from "./screens/SelfAssesmentScreen4";
import SelfAssesmentScreen5 from "./screens/SelfAssesmentScreen5";
import SelfAssesmentScreen6 from "./screens/SelfAssesmentScreen6";
import SelfAssesmentScreen7 from "./screens/SelfAssesmentScreen7";
import SelfAssesmentScreen8 from "./screens/SelfAssesmentScreen8";
import SelfAssesmentScreen9 from "./screens/SelfAssesmentScreen9";
import SelfAssesmentScreen10 from "./screens/SelfAssesmentScreen10";

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Journal Entry" component={JournalEntryScreen} />
        <Stack.Screen
          name="Self Assesment Questions"
          component={SelfAssesmentScreen}
        />
        <Stack.Screen
          name="SelfAssessmentScreen2"
          component={SelfAssesmentScreen2}
        />
        <Stack.Screen
          name="SelfAssessmentScreen3"
          component={SelfAssesmentScreen3}
        />
        <Stack.Screen
          name="SelfAssessmentScreen4"
          component={SelfAssesmentScreen4}
        />
        <Stack.Screen
          name="SelfAssessmentScreen5"
          component={SelfAssesmentScreen5}
        />
        <Stack.Screen
          name="SelfAssessmentScreen6"
          component={SelfAssesmentScreen6}
        />
        <Stack.Screen
          name="SelfAssessmentScreen7"
          component={SelfAssesmentScreen7}
        />
        <Stack.Screen
          name="SelfAssessmentScreen8"
          component={SelfAssesmentScreen8}
        />
        <Stack.Screen
          name="SelfAssessmentScreen9"
          component={SelfAssesmentScreen9}
        />
        <Stack.Screen
          name="SelfAssessmentScreen10"
          component={SelfAssesmentScreen10}
        />
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

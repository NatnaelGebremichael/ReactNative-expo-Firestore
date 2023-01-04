import Home from "./screens/Home";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CreateTask from "./screens/CreateTask";
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Tasks"
          component={Home}
          options={({ navigation }) => ({
            headerRight: () => (
              <TouchableWithoutFeedback
                onPress={() => navigation.navigate("CreateTask")}
              >
                <Ionicons
                  name={"ios-add"}
                  size={34}
                  color={"#0080ff"}
                  style={{ marginRight: 25 }}
                />
              </TouchableWithoutFeedback>
            ),
          })}
        />
        <Stack.Screen name="CreateTask" component={CreateTask} />
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

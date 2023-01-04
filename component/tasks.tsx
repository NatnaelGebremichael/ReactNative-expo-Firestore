import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Checkbox from "./Checkbox";

const Tasks = () => {
  return (
    <View>
      <View style={style.taskItem}>
        <Text>Lift Weights</Text>
        <Checkbox value={true} />
      </View>
      <View style={style.taskItem}>
        <Text>Eat Well</Text>
        <Checkbox value={false} />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  taskItem: {
    flexDirection: "row",
  },
});
export default Tasks;

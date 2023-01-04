import { StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import { Tasktype } from "../types";
import Checkbox from "./Checkbox";
import db from "../db/firestore";

type Props = {
  item: Tasktype;
};
const TaskItem: FC<Props> = ({ item }: Props) => {
  const updateTask = (taskId, isChecked) => {
    return db
      .collection("tasks")
      .doc(taskId)
      .update({
        completedAt: isChecked ? new Date() : null,
      });
  };

  return (
    <View style={style.taskItem} key={item.id}>
      <Text>{item.name}</Text>
      <Checkbox
        value={!!item.completedAt}
        onValueChange={(isChecked) => updateTask(item.id, isChecked)}
      />
    </View>
  );
};

export default TaskItem;

const style = StyleSheet.create({
  taskItem: {
    flexDirection: "row",
  },
});

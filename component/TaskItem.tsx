import { StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import { Tasktype } from "../types";
import Checkbox from "./Checkbox";

type Props = {
  item: Tasktype;
};
const TaskItem: FC<Props> = ({ item }: Props) => {
  return (
    <View style={style.taskItem} key={item.id}>
      <Text>{item.name}</Text>
      <Checkbox value={!!item.completedAt} />
    </View>
  );
};

export default TaskItem;

const style = StyleSheet.create({
  taskItem: {
    flexDirection: "row",
  },
});

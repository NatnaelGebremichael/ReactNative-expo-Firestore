import React, { FC, useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Checkbox from "./Checkbox";
import db from "../db/firestore";
import { Tasktype } from "../types";
import TaskItem from "./TaskItem";

const Tasks: FC = () => {
  const [tasks, setTasks] = useState<Tasktype[]>();

  //function
  const getTasks = (): Promise<Tasktype[]> => {
    return db
      .collection("tasks")
      .get()
      .then((result) => result.docs)
      .then((docs) =>
        docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
          createdAt: doc.data().createdAt,
          completedAt: doc.data().completedAt,
        }))
      );
  };

  useEffect(() => {
    getTasks().then((tasks) => setTasks(tasks));
  }, []);

  return (
    <View>
      {tasks?.map((task) => (
        <TaskItem item={task} key={task.id} />
      ))}
    </View>
  );
};

export default Tasks;

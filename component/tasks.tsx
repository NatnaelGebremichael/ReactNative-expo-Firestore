import React, { FC, useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Checkbox from "./Checkbox";
import { Tasktype } from "../types";
import TaskItem from "./TaskItem";
import { getTasks } from "../queriesIsh/getTasks";
import { streamTasks } from "../queriesIsh/addtasks";
import db from "../db/firestore";

const Tasks: FC = () => {
  const [tasks, setTasks] = useState<Tasktype[]>();
  const mapDocToTask = (document): Tasktype => {
    return {
      id: document.id,
      name: document.data().name,
      createdAt: document.data().createdAt,
      completedAt: document.data().completedAt,
    };
  };

  useEffect(() => {
    //unsubscribe help to cloth the strem and avoid memory "leaks"
    const unsubscribe = streamTasks({
      next: (querySnapshot) => {
        const tasks = querySnapshot.docs.map((docSnapshot) =>
          mapDocToTask(docSnapshot)
        );
        setTasks(tasks);
      },
      error: (error) => console.log(error),
    });
    return unsubscribe;
  }, [setTasks]);

  return (
    <View>
      {tasks?.map((task) => (
        <TaskItem item={task} key={task.id} />
      ))}
    </View>
  );
};

export default Tasks;

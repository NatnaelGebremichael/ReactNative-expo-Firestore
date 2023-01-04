import db from "../db/firestore";

export const streamTasks = (observer) => {
  db.collection("tasks").onSnapshot(observer);
};

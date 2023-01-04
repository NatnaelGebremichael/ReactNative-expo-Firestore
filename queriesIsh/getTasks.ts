import db from "../db/firestore";
import { Tasktype } from "../types";

//function
export const getTasks = (): Promise<Tasktype[]> => {
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
import React, { createContext, useState, useEffect } from "react";

export const TaskListContext = createContext();
const TaskListContextProvider = (props) => {
  const initTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const [tasks, setTasks] = useState(initTasks);
  const [count, setcount] = useState(0);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const changeStatus = (uid) => {
    let tasksCopy = tasks;
    let desiredTask = tasks && tasks.filter((task) => task.uid === uid);
    if (desiredTask && desiredTask[0]) {
      desiredTask[0].isCompleted = !desiredTask[0].isCompleted;
    }
    let desiredIndex = tasks.findIndex((task) => task.uid === uid);
    tasksCopy[desiredIndex] = desiredTask[0];
    setTasks(tasksCopy);
  };

  const addTask = (title, desc, priority) => {
    setTasks([
      ...tasks,
      { title, desc, isCompleted: false, priority, uid: count },
    ]);
    setcount(count + 1);
  };

  return (
    <TaskListContext.Provider value={{ tasks, changeStatus, addTask }}>
      {props.children}
    </TaskListContext.Provider>
  );
};
export default TaskListContextProvider;

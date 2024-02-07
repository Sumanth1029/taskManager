import React, { useContext } from "react";
import { TaskListContext } from "../../Contexts/context";
import TaskItem from "../TaskItem/TaskItem";
import "./TaskList.scss";

const TaskList = () => {
  const { tasks } = useContext(TaskListContext);
  let totalTasks = tasks.length;
  return (
    <div className="taskList">
      {tasks.length === 0 && (
        <div className="empty-tasklist">
          There are no tasks. Click + to add task
        </div>
      )}

      {tasks.length && (
        <div className="subheading">You have {totalTasks} tasks in total</div>
      )}
      {tasks &&
        tasks.map((task, index) => {
          return <TaskItem task={task} key={index} />;
        })}
    </div>
  );
};

export default TaskList;

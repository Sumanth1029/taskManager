import React, { useContext, useState } from "react";
import "./TaskItem.scss";
import { TaskListContext } from "../../Contexts/context";

const TaskItem = ({ task }) => {
  const { changeStatus } = useContext(TaskListContext);
  const [, settext] = useState("");

  const handleClick = () => {
    changeStatus(task.uid);
    if (task.isCompleted) {
      settext("Mark as active");
    } else {
      settext("Mark as completed");
    }
  };
  return (
    <div className={task.isCompleted ? `completedTask taskItem` : `taskItem`}>
      <div className="taskTitle">{task.title}</div>
      <div className="taskDesc">{task.desc}</div>
      <div
        className={
          task.priority === "High"
            ? `high-pri`
            : task.priority === "Low"
            ? `low-pri`
            : `med-pri`
        }
      >
        {task.priority}
      </div>
      <div
        className={task.isCompleted ? `mark-active` : `mark-complete`}
        onClick={handleClick}
      >
        {task.isCompleted ? "Mark as Active" : "Mark as completed"}
      </div>
    </div>
  );
};

export default TaskItem;

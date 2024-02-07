import React, { useContext, useState } from "react";
import { TaskListContext } from "../../Contexts/context";
import "./TaskInput.scss";

const TaskInput = () => {
  const { addTask } = useContext(TaskListContext);
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [show, setshow] = useState(false);
  const [priority, setpriority] = useState("Low");

  const handleTitleChange = (e) => {
    settitle(e.target.value);
  };
  const handleDescChange = (e) => {
    setdesc(e.target.value);
  };
  const triggerShow = () => {
    setshow(true);
  };

  const handleClose = () => {
    setshow(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(title, desc, priority);
    settitle("");
    setdesc("");
    setshow(false);
  };

  const handlePriority = (e) => {
    setpriority(e.target.value);
  };

  return (
    <div className="add-section">
      <div className="add-button" onClick={triggerShow}>
        +
      </div>
      {show && (
        <div className="form-container">
          <form className="form" onSubmit={handleSubmit}>
            <div className="title-box">
              <input
                onChange={handleTitleChange}
                type="text"
                className="task-title"
                placeholder="Task Title"
                value={title}
                required
              />
            </div>
            <div className="desc-box">
              <textarea
                className="task-desc"
                placeholder="Task Description"
                onChange={handleDescChange}
              />
            </div>
            Set Priority (Low by default)
            <div onChange={handlePriority} className="priorities">
              <input type="radio" name="priority" id="low" value="Low" />
              <label for="Low">Low</label>

              <input type="radio" name="priority" id="Medium" value="Medium" />
              <label for="Low">Medium</label>

              <input type="radio" name="priority" id="High" value="High" />
              <label for="Low">High</label>
            </div>
            <button type="submit" className="add-task-btn">
              <span className="material-symbols-rounded">done</span>
            </button>
            <button onClick={handleClose} className="close-task-btn">
              <span className="material-symbols-rounded">close</span>
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default TaskInput;

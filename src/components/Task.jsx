import React from "react";
import './Task.css'
import Tag from "./Tag.jsx"

const  TaskForm = () => {
  return (
    <header className="appHeader">
      <form>
        <input
          type="text"
          className="taskInput"
          placeholder="Enter Your Task Details"
        />
        <div className="bottomBar">
          <div className="tagsbar">
            <Tag>Office</Tag>
            <Tag>Personal</Tag>
            <Tag>Learning</Tag>
            <Tag>Home</Tag>
          </div>
          <div className="action">
            <select name="Marker Tag" id="taglist" className="taskStatus">
              <option value="Todo" className="todo">
                To Do
              </option>
              <option value="In Progress" className="inProgress">
                In Progress
              </option>
              <option value="Done" className="Done">
                Done
              </option>
            </select>
            <button type="submit" className="taskSubmit">
              Add Task
            </button>
          </div>
        </div>
      </form>
    </header>
  );
};
export default TaskForm;
import React, { useState } from "react";
import "./Task.css";
import Tag from "./Tag.jsx";

const TaskForm = ({ setTask }) => {
  const [taskData, setTaskData] = useState({
    task: "",
    status: "Todo",
    tags: [],
  });

  const selectTag = (tag) => {
    if (taskData.tags.some((item) => item === tag)) {
      const filteredTags = taskData.tags.filter((item) => item !== tag);
      setTaskData((prev) => {
        return { ...prev, tags: filteredTags };
      });
    } else {
      setTaskData((prev) => {
        return { ...prev, tags: [...prev.tags, tag] };
      });
    }
  };

  const checkTag = (tag) => {
    return taskData.tags.some((item) => item === tag);
  };


  const handleTaskData = (e) => {
    const { name, value } = e.target;
    setTaskData((prev) => {
      return { ...prev, [name]: value ,id: Date.now()};
    });
  };

  const handleSubmit = (e) => {
    console.log(taskData);
    e.preventDefault();
    setTask((prev) => {
      return [...prev, taskData];
    });
    setTaskData({
      task: "",
      status: "Todo",
      tags: [],
    });
  };

  return (
    <header className="appHeader">
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input
          type="text"
          name="task"
          value={taskData.task}
          className="taskInput"
          placeholder="Enter Your Task Details"
          onChange={(e) => handleTaskData(e)}
        />
        <div className="bottomBar">
          <div className="tagsbar">
            <Tag selectTag={selectTag} selected={checkTag("Office")}>
              Office
            </Tag>
            <Tag selectTag={selectTag} selected={checkTag("Personal")}>
              Personal
            </Tag>
            <Tag selectTag={selectTag} selected={checkTag("Learning")}>
              Learning
            </Tag>
            <Tag selectTag={selectTag} selected={checkTag("Home")}>
              Home
            </Tag>
          </div>
          <div className="action">
            <select
              name="status"
              id="taglist"
              className="taskStatus"
              value={taskData.status}
              onChange={(e) => handleTaskData(e)}
            >
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

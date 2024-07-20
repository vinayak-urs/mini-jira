import { useState } from "react";
import "./TaskForm.css";
import Tag from "./Tag.jsx";
import { useDispatch } from "react-redux";
import { addTask } from "../utils/taskListSlice.jsx";
import { STATUSOPTION, TAGS } from "../utils/constant.jsx";

const TaskForm = () => {
  const dispatch = useDispatch();
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
      return { ...prev, [name]: value, id: Date.now() };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask(taskData));
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
            {TAGS.map((tag, index) => (
              <Tag key={index} selectTag={selectTag} selected={checkTag(tag)}>
                {tag}
              </Tag>
            ))}
          </div>
          <div className="action">
            <select
              name="status"
              id="taglist"
              className="taskStatus"
              value={taskData.status}
              onChange={(e) => handleTaskData(e)}
            >
              {STATUSOPTION.map((status, index) => (
                <option
                  key={index}
                  value={status.value}
                  className={status.class}
                >
                  {status.value}
                </option>
              ))}
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

import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import TaskForm from "./components/TaskForm.jsx";
import TaskColums from "./components/TaskColums.jsx";
import { STATUS } from "./utils/constant.jsx";
import { useEffect, useState } from "react";
import { deleteTask, updateTaskList } from "./utils/taskListSlice.jsx";

function App() {
  const dispatch = useDispatch();
  let tasks = useSelector((store) => store.tasks.taskList);
  const activeCard = useSelector((store) => store.tasks.activeCard);
  const updateTask = () => {
    dispatch(
      updateTaskList(JSON.parse(window.localStorage.getItem("taskList")) || [])
    );
  };

  useEffect(() => {}, [tasks, activeCard]);
  useEffect(() => {
    updateTask();
  }, []);

  return (
    <div className="app">
      <TaskForm />
      <main className="appBody">
        {STATUS.map((status) => (
          <TaskColums
            heading={status.heading}
            logo={status.logo}
            task={tasks.filter((task) => task.status === status.heading)}
          />
        ))}
      </main>
    </div>
  );
}

export default App;

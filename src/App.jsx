import "./App.css";
import TaskForm from "./components/Task";
import TaskColums from "./components/TaskColums.jsx";

import todoLogo from "./assets/direct-hit.png";
import doneLogo from "./assets/check-mark-button.png";
import inProgressLogo from "./assets/glowing-star.png";
import { useEffect, useState } from "react";

function App() {
  const [task, setTask] = useState(
    JSON.parse(window.localStorage.getItem("taskList")) || []
  );

  const [activeCard, setActiveCard] = useState(null);
  const todoTask = task.filter((task) => task.status === "Todo");
  const inProgressTask = task.filter((task) => task.status === "In Progress");
  const doneTask = task.filter((task) => task.status === "Done");
  const handleDelete = (taskId) => {
    const newTask = task.filter((task) => task.id !== taskId);
    setTask(newTask);
  };

  useEffect(() => {
    window.localStorage.setItem("taskList", JSON.stringify(task));
  }, [task]);

  return (
    <div className="app">
      <TaskForm setTask={setTask} />
      <main className="appBody">
        <TaskColums
          heading={"Todo"}
          logo={todoLogo}
          task={todoTask}
          handleDelete={handleDelete}
          setActiveCard={setActiveCard}
        />
        <TaskColums
          heading={"In Progress"}
          logo={inProgressLogo}
          task={inProgressTask}
          handleDelete={handleDelete}
          setActiveCard={setActiveCard}
        />
        <TaskColums
          heading={"Done"}
          logo={doneLogo}
          task={doneTask}
          handleDelete={handleDelete}
          setActiveCard={setActiveCard}
        />
      </main>
      <h1>Active Card - {activeCard}</h1>
    </div>
  );
}

export default App;

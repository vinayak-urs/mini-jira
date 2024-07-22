import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import TaskForm from "./components/TaskForm.jsx";
import TaskColums from "./components/TaskColums.jsx";
import { STATUS } from "./utils/constant.jsx";
import { useEffect, useState } from "react";
import { deleteTask, updateTaskList } from "./utils/taskListSlice.jsx";
import Navbar from "./components/Navbar.jsx";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
  Outlet,
} from "react-router-dom"


const Contact = () => <h2>Contact Page</h2>;

function App() {
  const dispatch = useDispatch();
  let tasks = useSelector((store) => store.tasks.taskList);
  const activeCard = useSelector((store) => store.tasks.activeCard);
  const updateTask = () => {
    dispatch(
      updateTaskList(JSON.parse(window.localStorage.getItem("taskList")) || [])
    );
  };

  useEffect(() => { }, [tasks, activeCard]);
  useEffect(() => {
    updateTask();
  }, []);


  const Home = () => <main className="appBody">
    {STATUS.map((status) => (
      <TaskColums
        heading={status.heading}
        logo={status.logo}
        task={tasks.filter((task) => task.status === status.heading)}
      />
    ))}
  </main>;

  const AddTask = ()=> <main className="appBody">
    <TaskForm />
  </main>


  return (
    <div className="app">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/addtask" element={ <TaskForm /> } />
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>

      </Router>

    </div>
  );
}

export default App;

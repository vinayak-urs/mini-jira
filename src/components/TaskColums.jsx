import React from "react";
import "./TaskColums.css";
import TaskCard from "./TaskCard.jsx";
import Drag from "./Drag.jsx";

const TaskColums = ({ logo, heading, task,handleDelete,setActiveCard }) => {
  return (
    <section className="taskColumn">
      <h2 className="taskColumnHeader">
        <img src={logo} alt="logo" className="taskLogo" />
        {heading}
      </h2>
      <Drag />
      {task.map((task, index) => (
        <React.Fragment key={index}>
          <TaskCard
            task={task}
            handleDelete={handleDelete}
            setActiveCard={setActiveCard}
          />
          <Drag />
        </React.Fragment>
      ))}
    </section>
  );
};

export default TaskColums;

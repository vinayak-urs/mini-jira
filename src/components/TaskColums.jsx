import React from "react";
import "./TaskColums.css";
import TaskCard from "./TaskCard.jsx";
import Drag from "./Drag.jsx";
import { useDispatch } from "react-redux";
import { onDropCard } from "../utils/taskListSlice.jsx";

const TaskColums = ({ logo, heading, task }) => {
  const dispatch =useDispatch()
  const handleDrop=(status,id) =>{
    dispatch(onDropCard({ status: status, id: id }));
  }

  return (
    <section className="taskColumn">
      <h2 className="taskColumnHeader">
        <img src={logo} alt="logo" className="taskLogo" />
        {heading}
      </h2>
      <Drag onDrop={() => handleDrop(heading, 0)} />
      {task.map((tasks, index) => (
        <React.Fragment key={index}>
          <TaskCard task={tasks} />
          <Drag onDrop={() => handleDrop(heading, tasks.id)} />
        </React.Fragment>
      ))}
    </section>
  );
};

export default TaskColums;

import React from 'react'
import "./TaskColums.css"
import TaskCard from './TaskCard.jsx';

const TaskColums = (props) => {
  return (
    <section className="taskColumn">
      <h2 className="taskColumnHeader">
        <img
          src={props.logo}
          alt="logo"
          className="taskLogo"
        />
        {props.heading}
      </h2>
      {/* <TaskCard/> */}
      <TaskCard/>
    </section>
  );
}

export default TaskColums
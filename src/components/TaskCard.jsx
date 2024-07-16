import "./TaskCard.css";
import React from "react";
import deleteLogo from '../assets/delete.png';
import Tag from "./Tag";

const TaskCard = () => {
  return (
    <article className="taskCard">
      <p className="taskText">This is the dummy Card details</p>
      <div className="taskCardBottom">
        <div className="taskCardsTags">
          <Tag> Office</Tag>
          <Tag>Home</Tag>
        </div>
        <div className="taskDelete">
          <img src={deleteLogo} alt="Delete-Logo" className="delete" />
        </div>
      </div>
    </article>
  );
};

export default TaskCard;

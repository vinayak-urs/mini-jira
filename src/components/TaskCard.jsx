import "./TaskCard.css";
import React from "react";
import deleteLogo from "../assets/delete.png";
import Tag from "./Tag";

const TaskCard = ({ task, handleDelete, setActiveCard }) => {
  return (
    <article
      className="taskCard"
      draggable
      onDragStart={()=>setActiveCard(task.id)}
      onDragEnd={()=>setActiveCard(null)}
    >
      <p className="taskText">{task.task}</p>
      <div className="taskCardBottom">
        <div className="taskCardsTags">
          {task.tags.map((tag, index) => (
            <Tag key={index} selected>
              {tag}
            </Tag>
          ))}
        </div>
        <div
          className="taskDelete"
          onClick={() => {
            return handleDelete(task.id);
          }}
        >
          <img src={deleteLogo} alt="Delete-Logo" className="delete" />
        </div>
      </div>
    </article>
  );
};

export default TaskCard;

import React from "react";
import {IoTrashSharp} from "react-icons/io5";
import { NavLink } from "react-router";

export default function Task({ taskObj, onDelete }) {
  return (
    <li>
      <div className="taskContainer">
        <div className="taskTileIconContainer">
          <NavLink to={`/tasks/${taskObj.id}`}>
            {taskObj.title}
          </NavLink>
          
          <IoTrashSharp className="deleteIcon" onClick={() => onDelete(taskObj.id)}/>
        </div>
          <p>{taskObj.date}</p>
      </div>
    </li>
  );
}
import React from "react";
import {IoTrashSharp} from "react-icons/io5";

export default function Task({ taskObj }) {
  return (
    <li>
      <div className="taskContainer">
        <div className="taskTileIconContainer">
          <p>{taskObj.title}</p>
          <IoTrashSharp className="deleteIcon" onClick={() => onDelete(taskObj.id)}/>
        </div>
          <p>{taskObj.date}</p>
      </div>
    </li>
  );
}
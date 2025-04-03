import React from "react";
import {IoTrashSharp} from "react-icons/io5";

export default function Task({ taskObj }) {
  return (
    <li>
      <div className="taskContainer">
        <div className="taskTileIconContainer">
          <p>{taskObj.title}</p>
          <IoTrashSharp/>
        </div>
          <p>{taskObj.date}</p>
      </div>
    </li>
  );
}
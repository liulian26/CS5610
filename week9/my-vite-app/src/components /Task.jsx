import React from "react";

export default function Task({ taskObj }) {
  return (
    <li>
      <div className="taskContainer">
        <p>{taskObj.title}</p>
        <p>{taskObj.date}</p>
      </div>
    </li>
  );
}
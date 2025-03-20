import React,{useEffect, useState} from "react";
import Task from "./Task";


export default function TaskList({ tasks, setTasks, onDelete }){
  // const handleDelete = (taskId) => {
  //   setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  // };
  // const [tasks, setTasks] = useState([]);
  // useEffect(() => {
  //   fetch("http://localhost:5001/tasks")
  //   .then((response) => response.json())
  //   .then((data) => setTasks(data)) 
  //   .catch((error) => console.error("Error fetching tasks:", error));
  //   }, []);
    
    return(
      // <ul>
      //       {/* using array.map to render the tasks array titles 
      //       for each element return an <li> */}
      //       {tasks.map((task) => {
      //         return <Task key={task.id} taskObj={task} />;
      //       })}
      //     </ul>
      <div>
      {tasks.length === 0 ? (
        <p>No tasks left!</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <Task key={task.id} taskObj={task} onDelete={onDelete} />
          ))}
        </ul>
      )}
    </div>
      );
}
import React,{useState} from "react";
import Task from "./Task";


export default function TaskList(){
    const [tasks, setTasks] = useState([
        {
          id: 1,
          title: "Review week 9 material",
          date: "June 4th at 1 pm",
        },
        {
          id: 2,
          title: "Do quiz 9",
          date: "June 4th at 6 pm",
        },
        {
          id: 3,
          title: "Work on assignment 2",
          date: "June 5th at 8 am",
        },
      ]);

      return(
      <ul>
            {/* using array.map to render the tasks array titles 
            for each element return an <li> */}
            {tasks.map((task) => {
              return <Task key={task.id} taskObj={task} />;
            })}
          </ul>
      );
}
import React, { useEffect, useState } from 'react';
import Header from './components /Header';
import TaskList from './components /TasksList';
import AddTask from './components /AddTask';

export default function App() {
  const appName = "My Awesome App";
  const [tasks, setTasks] = useState([]); 

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:5001/tasks");
        const data = await response.json();
        setTasks(data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    }
    fetchData(); 
  }, []); 

  return(
    <div className="appContainer">
      <Header myAppName={appName} version={2} />  
      <AddTask />
      <TaskList tasks={task} setTasks={setTasks}/>
    </div>
  );
}
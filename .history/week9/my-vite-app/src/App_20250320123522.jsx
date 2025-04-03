import React, { useEffect, useState } from 'react';
import Header from './components /Header';
import TaskList from './components /TasksList';
import AddTask from './components /AddTask';

export default function App() {
  const appName = "My Awesome App";
  const [tasks, setTasks] = useState([]); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:5001/tasks");
        const data = await response.json();
        setTasks(data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      } finally {
        setLoading(false); 
      }
    }
    fetchData(); 
  }, []); 

  const handleDelete = async (taskId) => {
    try {
      const response = await fetch(`http://localhost:5001/tasks/${taskId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
      } else {
        console.error("Failed to delete task");
      }
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <div className="appContainer">
      <Header myAppName={appName} version={2} />
      <AddTask />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <TasksList tasks={tasks} setTasks={setTasks} onDelete={handleDelete}  />
      )}
    </div>
  );
}
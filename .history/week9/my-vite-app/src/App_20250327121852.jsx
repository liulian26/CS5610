import React, { useEffect, useState } from 'react';
import Header from './components /Header';
import TaskList from './components /TasksList';
import AddTask from './components /AddTask';
import TaskDetails from './components /TaskDetail';
import { Routes, Route, Link, Outlet } from "react-router";

export default function App() {
  const appName = "My Awesome App";
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);

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

  const handleAddTask = async (newTask) => {
    try {
      const response = await fetch("http://localhost:5001/tasks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newTask),
      });

      if (response.ok) {
        const savedTask = await response.json();
        setTasks((prevTasks) => [...prevTasks, savedTask]);
      } else {
        console.error("Failed to add task");
      }
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

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

  const toggleForm = () => {
    setShowForm((prev) => !prev);
  };

  return (
    <div className="appContainer">
      <nav>
        <Header myAppName={appName} version={2} toggleForm={toggleForm} showForm={showForm} />
        <Link to="/">Home</Link> | <Link to="/tasks">Tasks</Link>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <>
              {showForm && <AddTask onAddTask={handleAddTask} />}
              {loading ? <p>Loading...</p> : <p>Welcome to the Home Page!</p>}
            </>
          }
        />

        <Route
          path="/tasks"
          element={
            <>
              {showForm && <AddTask onAddTask={handleAddTask} />}
              {loading ? (
                <p>Loading...</p>
              ) : (
                <>
                  <TaskList tasks={tasks} setTasks={setTasks} onDelete={handleDelete} />
                  <Outlet />
                </>
              )}
            </>
          }
        >
          <Route path=":taskId" element={<TaskDetails />} />
        </Route>

        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </div>
  );
}

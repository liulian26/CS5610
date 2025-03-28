import React, { useEffect, useState } from 'react';
import Header from './components /Header';
import TaskList from './components /TasksList';
import AddTask from './components /AddTask';
import TaskDetails from './components /TaskDetail';
import { Routes, Route, Link, Outlet } from "react-router";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false); 

  let controller = new AbortController();

  async function fetchData() {
    try {
      const signal = controller.signal;
      const response = await fetch("http://localhost:5001/api/tasks", {
        signal,});
        if (response.ok) {
          const data = await response.json();
          setTasksFromServer(data);
          setIsLoading(false);
          console.log("fetchData ", data);
        } else {
          throw new Error("fetch failed");
        }
      } catch (err) {
        console.log("fetchData ", err);
      }
    }
    useEffect(() => {
      fetchData();
      return () => {
        console.log("cleanup");
        controller.abort();
      };
    }, []);
  
    const appName = "My Awesome App";
    return (
      <div className="appContainer">
        <nav>
          <NavLink to="/"> Home</NavLink>
          <NavLink to="/tasks">Tasks</NavLink>
        </nav>
  
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header
                  myAppName={appName}
                  showForm={showForm}
                  onAddTask={toggleShowForm}
                />
                {showForm && <AddTask />}
              </>
            }
          />
          <Route
            path="tasks"
            element={<TasksList tasks={tasksFromServer} isLoading={isLoading} />}
          >
            <Route path=":taskId" element={<TaskDetails />} />
          </Route>
  
          <Route path="*" element={<h1>That page doesn't exist</h1>} />
        </Routes>
      </div>
    );
  }
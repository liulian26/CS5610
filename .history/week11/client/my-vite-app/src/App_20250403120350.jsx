import React, { useState, useEffect } from "react";
import Header from './components/Header';
import TaskList from './components/TasksList';
import AddTask from './components/AddTask';
import TaskDetails from './components/TaskDetail';
import { Routes, Route, NavLink, Outlet } from "react-router";
import LoginButton from "./components/LoginButton";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [tasks, setTasks] = useState([]);

  const appName = "My Awesome App";

  const toggleShowForm = () => {
    setShowForm(prev => !prev);
  };

  useEffect(() => {
    const controller = new AbortController();

    async function fetchData() {
      try {
        const response = await fetch("http://localhost:5001/tasks", {
          signal: controller.signal
        });
        if (response.ok) {
          const data = await response.json();
          setTasks(data);
          setLoading(false);
          console.log("fetchData ", data);
        } else {
          throw new Error("fetch failed");
        }
      } catch (err) {
        console.log("fetchData ", err);
      }
    }

    fetchData();

    return () => {
      console.log("cleanup");
      controller.abort();
    };
  }, []);

  return (
    <div className="appContainer">
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/tasks">Tasks</NavLink>
      </nav>
      <LoginButton />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header
                myAppName={appName}
                showForm={showForm}
                toggleForm={toggleShowForm}
              />
              {showForm && <AddTask />}
              {loading ? <p>Loading...</p> : <p>Welcome to the Home Page!</p>}
            </>
          }
        />
        <Route
          path="/tasks"
          element={
            <>
              <Header
                myAppName={appName}
                showForm={showForm}
                toggleForm={toggleShowForm}
              />
              {showForm && <AddTask />}
              <TaskList tasks={tasks} />
              <Outlet />
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


import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import TasksList from "./components/TasksList";
import AddTask from "./components/AddTask";
import { Link, NavLink, Route, Routes } from "react-router";
import TaskDetails from "./components/TaskDetail";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";
import ProtectedRoute from "./components/ProtectedRoute";


export default function App() {
  const { isAuthenticated, isLoading } = useAuth0();
  const [showForm, setShowForm] = useState(false);

  const toggleShowForm = () => {
    setShowForm(!showForm);
  };
  const appName = "My Awesome App";

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

  return isLoading ? (
    <img src="https://cdn.auth0.com/blog/auth0-react-sample/assets/loading.svg" />
  ) : (
    <div className="appContainer">
      <div className="navBar">
        <nav>
        <NavLink
            // className={({ isActive }) => {
            //   if (isActive) {
            //     return "activeLink";
            //   }
            // }}
            to="/"
          >
            Home
          </NavLink>
          <NavLink to="/tasks">Tasks</NavLink>
        </nav>
      

        <div>{isAuthenticated ? <LogoutButton /> : <LoginButton />}</div>
      </div>
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
        <Route path="tasks" element={<TasksList />}>
          <Route path=":taskId" element={<TaskDetails />} />
        </Route>
        <Route
          path="profile"
          element={<ProtectedRoute component={Profile} />}
        />
        <Route path="*" element={<h1>That page doesn't exist</h1>} />
      </Routes>
    </div>
  );
}
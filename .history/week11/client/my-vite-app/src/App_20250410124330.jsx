import React, { useState } from "react";
import Header from "./components/Header";
import TasksList from "./components/TasksList";
import AddTask from "./components/AddTask";
import { NavLink, Route, Routes } from "react-router";
import TaskDetails from "./components/TaskDetail";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";
import Profile from "./components/Profile";
import ProtectedRoute from "./components/ProtectedRoute";
import { FaBars, FaTimes } from "react-icons/fa";
import "./index.css";

export default function App() {
  const { isAuthenticated, isLoading } = useAuth0();
  const [showForm, setShowForm] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleShowForm = () => {
    setShowForm(!showForm);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const appName = "My Awesome App";

  return isLoading ? (
    <img src="https://cdn.auth0.com/blog/auth0-react-sample/assets/loading.svg" />
  ) : (
    <div className="appContainer">
      <div className="navBar">
        <div className="menuIcon" onClick={toggleMenu}>
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>

        <div className={`navContent ${menuOpen ? "showMenu" : ""}`}>
          <nav className="navLinks">
            <NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink>
            <NavLink to="/tasks" onClick={() => setMenuOpen(false)}>Tasks</NavLink>
            <NavLink to="/profile" onClick={() => setMenuOpen(false)}>Profile</NavLink>
          </nav>
          <div className="authButtons">
            {isAuthenticated ? <LogoutButton /> : <LoginButton />}
          </div>
        </div>
      </div>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header myAppName={appName} showForm={showForm} onAddTask={toggleShowForm} />
              {showForm && <AddTask />}
            </>
          }
        />
        <Route path="tasks" element={<TasksList />}>
          <Route path=":taskId" element={<TaskDetails />} />
        </Route>
        <Route path="profile" element={<ProtectedRoute component={Profile} />} />
        <Route path="*" element={<h1>That page doesn't exist</h1>} />
      </Routes>
    </div>
  );
}

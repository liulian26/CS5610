import React from "react";


export default function Header({ myAppName, toggleForm, showForm }) {
    return (
        <div>
            <header className="headerContainer">
                <h1>Welcome to {myAppName}</h1>
                <button onClick={toggleForm} className="toggleFormBtn">
                {showForm ? "Close" : "Add a Task"}
                </button>
            </header>
        </div>
    );
}
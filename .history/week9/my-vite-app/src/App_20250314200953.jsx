import React from 'react';
import Header from './components /Header';
import TaskList from './components /TaskList';

export default function App() {
  const appName = "My Awesome App"

  return(
    <div className="appContainer">
      <Header myAppName={appName} version={2} />  
      <TaskList />
    </div>
  );
}
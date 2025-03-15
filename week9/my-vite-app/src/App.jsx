import React from 'react';
import Header from './components /Header';

export default function App() {
  const tasks = [
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
  ];
  const appName = "My Awesome App"

  return(
    <div className="appContainer">
      <Header myAppName={appName} version={2} />  
      <ul>
        {/* using array.map to render the tasks array titles 
        for each element return an <li> */}
        {tasks.map((task) => {
          return <li key={task.id}>{task.title}</li>;
        })}
      </ul>
    </div>
  );
}
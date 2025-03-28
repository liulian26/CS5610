import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function TaskDetails() {
  const { taskId } = useParams();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch(`http://localhost:5000/users?task=${taskId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchUsers();
    }, [taskId]);

  return (
    <div>
      <h2>Task Details - Task ID: {taskId}</h2>
      <h3>Assigned User(s):</h3>
      {users.length > 0 ? (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      ) : (
        <p>No users assigned to this task.</p>
      )}
    </div>
  );
}

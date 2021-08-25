import React from "react";
import "./styles.css";
import { useFetch } from "../../../hooks/useFetch";

function DataUsers() {
  
  const users = useFetch("https://jsonplaceholder.typicode.com/users")

  return (
    <div className="users-widget">
      <ul className="users-widget-list">
        {users.map((user) => (
          <li className="users-list" key={user.id}>
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DataUsers;

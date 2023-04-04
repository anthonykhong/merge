import React from "react";
import ToDoListItem from "../ToDoListItem/ToDoListItem";
import "./ToDoList.css";

// ToDoList.jsx

export default function ToDoList({ todos }) {
  return (
    <ul className="ToDoList">
      {todos.map((t, idx) => (
        <ToDoListItem index={idx} todo={t} key={idx} />
      ))}
    </ul>
  );
}

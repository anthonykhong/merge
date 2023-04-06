import React from "react";
import "./ToDoListItem.css";

export default function ToDoListItem({ todo, index }) {
  return (
    <>
      <ul
        className="ToDoListItem"
        style={{ backgroundColor: index % 2 ? "lavender" : "plum" }}
      >
        <div className="flex-ctr-ctr">{index + 1}</div>
        <li>{todo.text}</li>
        <button>{todo.completed ? X : V}</button>
      </ul>
    </>
  );
}

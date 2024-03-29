import React from "react";
import ToDoListItem from "../ToDoListItem/ToDoListItem";
import "./ToDoList.css";

export default function ToDoList({ todos }) {
  // Create an array of <ToDoListItem> components
  const toDoListItems = todos.map((t) => <ToDoListItem />);
  return (
    <ul className="ToDoList">
      {todos.map((t, idx) => (
        <ToDoListItem todo={t} index={idx} key={idx} />
      ))}
    </ul>
  );
}

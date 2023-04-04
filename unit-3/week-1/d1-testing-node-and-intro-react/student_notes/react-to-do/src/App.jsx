import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Blog from "./components/Blog/Blog";
import ToDoList from "./components/ToDoList/ToDoList";

const todos = ["Have Fun", "Learn React", "Learn the MERN-Stack"];

function App() {
  return (
    <div className="App">
      <h1>React To-Do with BTY</h1>
      <ToDoList todos={todos} />
    </div>
  );
}

export default App;

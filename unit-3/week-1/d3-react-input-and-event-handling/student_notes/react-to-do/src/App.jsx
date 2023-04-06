import { useState } from "react";
import "./App.css";
import ToDoList from "./components/ToDoList/ToDoList";
import NewToDoForm from "./components/NewToDoForm/NewToDoForm";

// Add the todos array

function App() {
  const [todos, setTodos] = useState([
    { text: "Have Fun", completed: true },
    { text: "Learn React", completed: false },
    { text: "Learn the MERN-Stack", completed: false },
  ]);
  const [showTodos, setShowTodos] = useState(true);

  function addToDo(todo) {
    setTodos([...todos, todo]);
  }

  return (
    <div className="App">
      <h1>React To-Do with BTY</h1>
      <button onClick={() => setShowTodos(!showTodos)}>
        {showTodos ? "Hide" : "show"}
      </button>
      {showTodos && <ToDoList todos={todos} />}
      <hr />
      <NewToDoForm addToDo={addToDo} />
    </div>
  );
}

export default App;

// const [formData, setFormData] = useState({
//   name: "",
//   emotion: "😁",
// });

//  function handleChange(evt) {
//    // Replace with new object and use a computed property
//    // to update the correct property
//    const newFormData = { ...formData, [evt.target.name]: evt.target.value };
//    setFormData(newFormData);
//  }

// <>
//   <form>
//     <label>NAME</label>
//     <input name="name" onChange={handleChange} value={formData.name} />
//     <label>EMOTION</label>
//     <select name="emotion" onChange={handleChange} value={formData.emotion}>
//       <option value="😁">Happy</option>
//       <option value="😐">Neutral</option>
//       <option value="😠">Angry</option>
//     </select>
//   </form>
//   <h1>
//     {formData.name} is {formData.emotion}
//   </h1>
// </>

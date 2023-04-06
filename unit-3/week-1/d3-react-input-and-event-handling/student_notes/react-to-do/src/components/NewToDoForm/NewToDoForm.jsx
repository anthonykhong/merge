import { useState } from "react";

export default function NewToDoForm({ addToDo }) {
  const [newTodo, setNewTodo] = useState({
    text: "",
    completed: false,
  });

  const handleChange = (evt) => {
    setNewTodo({ ...newTodo, [evt.target.name]: evt.target.value });
  };

  function handleAddToDo(evt) {
    evt.preventDefault();
    addToDo(newTodo);
    setNewTodo("");
  }

  return (
    <div>
      <h2>New To-Do</h2>
      <form onSubmit={handleAddToDo}>
        <input
          name="text"
          value={newTodo.text}
          placeholder="New To-Do"
          onChange={handleChange}
          required
          pattern=".{4,}"
        />
        <button type="submit">ADD TO-DO</button>
      </form>
    </div>
  );
}

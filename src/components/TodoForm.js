import React, { useState } from "react";

function TodoForm() {
  const [input, setInput] = useState("");

  return (
    <form className="todo-form">
      <input
        type="text"
        placeholder="Add task"
        value={input}
        name="text"
        className="todo-input"
      ></input>
      <button className="todo-button">Add new task</button>
    </form>
  );
}

export default TodoForm;

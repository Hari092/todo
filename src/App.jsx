import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState("");
  const handleAdd = () => {
     if (todoValue === ""){
      alert("Please add inputs");
      return;
    };
    setTodos([todoValue, ...todos]);
    setTodoValue("");
  };
  const handleClear = () => {
    setTodos([]);
  };
  const handleEdit=(index)=>{
    setTodos(todos.filter((a,i) => i !== index))
    setTodoValue(todos[index]);
  }
  return (
    <>
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          required
          value={todoValue}
          onChange={(e) => setTodoValue(e.target.value)}
        />
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleClear}>clear all</button>
      </div>
      <div>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              {todo}
              <button
                onClick={() => setTodos(todos.filter((a,i) => i !== index))}
              >
                🗑️
              </button>
              <button onClick={()=>handleEdit(index)}>✏️</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;

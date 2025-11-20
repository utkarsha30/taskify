import React, { useState } from "react";
import "./App.css";
import { Todo } from "./model";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";
import "@awesome.me/webawesome/dist/webawesome.js";
import "@awesome.me/webawesome/dist/styles/utilities.css";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };
  console.log(todos);
  return (
    <div className="App">
      <span className="wa-stack wa-align-items-center wa-font-size-3xl wa-font-weight-bold ">
        Taskify
      </span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;

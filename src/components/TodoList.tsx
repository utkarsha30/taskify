import React from "react";
import { Todo } from "../model";
import TodoCard from "./TodoCard";
interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }: Props) => {
  return (
    // <div className="todo-list">

    <div
      className="wa-grid wa-gap-s "
      style={
        { "--min-column-size": "400px", margin: "1rem" } as React.CSSProperties
      }
    >
      {todos.map((todo) => (
        <TodoCard todo={todo} todos={todos} setTodos={setTodos} />
      ))}
    </div>
  );
};

export default TodoList;

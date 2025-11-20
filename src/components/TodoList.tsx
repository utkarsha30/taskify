import React from "react";
import "./styles.css";
import { Todo } from "../model";
import TodoCard from "./TodoCard";
interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }: Props) => {
  return (
    // <div className="todo-list">
    <div>
      <div
        className="wa-grid wa-gap-s wa-auto-fit wa-p-2xs"
        style={{ "--min-column-size": "400px" } as React.CSSProperties}
      >
        {todos.map((todo) => (
          <TodoCard todo={todo} todos={todos} setTodos={setTodos} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;

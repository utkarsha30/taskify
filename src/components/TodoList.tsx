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
    <div className="todo-list">
      {todos.map((todo) => (
        <TodoCard todo={todo} key={todo.id} todos={todos} setTodos={setTodos} />
      ))}
    </div>
  );
};

export default TodoList;

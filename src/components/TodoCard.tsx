import React, { useEffect, useRef, useState } from "react";
import { Todo } from "../model";
// import "./styles.css";
type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const TodoCard = ({ todo, todos, setTodos }: Props) => {
  const [edit, setEdit] = React.useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);
  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };
  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
  };
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  return (
    <form className="todos_single" onSubmit={(e) => handleEdit(e, todo.id)}>
      {edit ? (
        <input
          ref={inputRef}
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
          className="todos_single_text"
        />
      ) : todo.isDone ? (
        <s className="todos_single_text">{todo.todo}</s>
      ) : (
        <span className="todos_single_text">{todo.todo}</span>
      )}
      <div className="wa-cluster wa-justify-content-center wa-align-items-center wa-gap-m">
        <span
          className="wa-cursor-pointer"
          style={{ fontSize: "1.5rem" }}
          onClick={() => {
            if (!edit && !todo.isDone) {
              setEdit(!edit);
            }
          }}
        >
          <wa-icon family="solid" name="pencil" />
        </span>
        <span
          className="wa-cursor-pointer"
          style={{ fontSize: "1.5rem" }}
          onClick={() => handleDelete(todo.id)}
        >
          <wa-icon family="solid" name="trash" />
        </span>
        <span
          className="wa-cursor-pointer"
          style={{ fontSize: "1.5rem" }}
          onClick={() => handleDone(todo.id)}
        >
          <wa-icon family="solid" name="check" />
        </span>
      </div>
    </form>
  );
};

export default TodoCard;

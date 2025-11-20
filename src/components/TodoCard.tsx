import React, { useEffect, useState } from "react";
import { Todo } from "../model";
import WaInput from "@awesome.me/webawesome/dist/components/input/input";

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const TodoCard = ({ todo, todos, setTodos }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);
  const [inputEl, setInputEl] = useState<WaInput | null>(null);

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

  // Focus safely when edit mode is activated
  useEffect(() => {
    if (edit && inputEl) {
      // Wait for element to be fully upgraded
      const timeout = setTimeout(() => inputEl.focus?.(), 0);
      return () => clearTimeout(timeout);
    }
  }, [edit, inputEl]);

  return (
    <form
      className="todos_single  wa-flank:end"
      onSubmit={(e) => handleEdit(e, todo.id)}
      style={{ width: "100%", height: "4rem", padding: "0 1rem" }}
    >
      <div>
        {edit ? (
          <wa-input
            ref={setInputEl}
            value={editTodo}
            onchange={(e: any) => setEditTodo(e.target.value)}
            style={{ width: "100%" }}
            pill
          />
        ) : todo.isDone ? (
          <s>{todo.todo}</s>
        ) : (
          <span>{todo.todo}</span>
        )}
      </div>

      <div className="wa-cluster wa-justify-content-center wa-align-items-center wa-gap-m">
        <span
          className="wa-cursor-pointer"
          style={{ fontSize: "1.5rem" }}
          onClick={() => !edit && !todo.isDone && setEdit(true)}
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

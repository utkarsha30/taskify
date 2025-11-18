import React, { useRef } from "react";
import "./styles.css";
import "@awesome.me/webawesome/dist/components/button/button.js";
import "@awesome.me/webawesome/dist/components/input/input.js";
import "@awesome.me/webawesome/dist/components/callout/callout.js";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div className="overlay-wrapper">
      <form
        className="input"
        tabIndex={0}
        onSubmit={(e) => {
          handleAdd(e);
          inputRef.current?.blur();
        }}
      >
        <input
          ref={inputRef}
          value={todo}
          onInput={(e: any) => setTodo(e.target.value)}
          placeholder="Enter a To Do"
        />
        <button type="submit">Go</button>
      </form>
    </div>
  );
};

export default InputField;

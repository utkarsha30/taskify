import React from "react";
// import "./styles.css";
import "@awesome.me/webawesome/dist/components/button/button.js";
import "@awesome.me/webawesome/dist/components/input/input.js";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
  let inputEl: any = null;

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleAdd(e);
    inputEl?.blur();
    if (inputEl) inputEl.value = "";
    setTodo("");
  };

  return (
    <div className="overlay-wrapper">
      <form
        className="input"
        onSubmit={(e) => {
          e.preventDefault();
          handleAdd(e);
          inputEl?.blur();
          setTodo("");
        }}
      >
        <wa-input
          ref={(el) => (inputEl = el)}
          value={todo}
          oninput={(e: any) => setTodo(e.target.value)}
          placeholder="Enter a To Do"
          size="large"
          pill
        >
          <wa-button slot="end" type="submit" variant="brand" pill>
            Go
          </wa-button>
        </wa-input>
      </form>
    </div>
  );
};

export default InputField;

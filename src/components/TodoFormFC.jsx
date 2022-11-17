import { useState } from "react";

const TodoFormFC = ({ onSubmit }) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const handleChange = (e) => setInput(e.target.value);
  const handleSubmit = () => {
    if (input.length < 2) {
      setError("must be at least 2 chars");
      return;
    }
    onSubmit(input);
    setInput("");
  };
  return (
    <div className="row todo-form">
      <div className="input-group input-group-sm mb-3">
        <span className="input-group-text" id="inputGroup-sizing-sm">
          I need to ...
        </span>
        <input
          value={input}
          onChange={handleChange}
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-sm"
        />
        <button onClick={handleSubmit} className="btn btn-primary">
          Add
        </button>
      </div>
      {error ? <span className="text-danger">{error} </span> : null}
    </div>
  );
};

export default TodoFormFC;

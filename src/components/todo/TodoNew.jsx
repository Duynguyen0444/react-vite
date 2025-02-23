import { useState } from "react";

const TodoNew = (props) => {
  const { addNewTodo } = props;

  const [valueInput, setValueInput] = useState("");

  const handleClick = () => {
    addNewTodo(valueInput);
  };

  const handleOnChange = (value) => {
    setValueInput(value);
  };

  return (
    <div className="todo-new">
      <input
        type="text"
        placeholder="Add todo"
        onChange={(event) => handleOnChange(event.target.value)}
      />
      <button style={{ cursor: "pointer" }} onClick={handleClick}>
        Add
      </button>
    </div>
  );
};

export default TodoNew;

import { useState } from "react";
import PropTypes from 'prop-types';

const TodoNew = (props) => {
  const { addNewTodo } = props;
  const [valueInput, setValueInput] = useState("");

  const handleOnChange = (value) => {
    setValueInput(value);
  };

  const handleClick = () => {
    addNewTodo(valueInput);
    setValueInput("");
  };

  return (
    <div className="todo-new">
      <input
        type="text"
        placeholder="Add todo"
        value={valueInput}
        onChange={(event) => handleOnChange(event.target.value)}
      />
      <button style={{ cursor: "pointer" }} onClick={handleClick}>
        Add
      </button>
    </div>
  );
};

TodoNew.propTypes = {
  addNewTodo: PropTypes.func.isRequired,
};

export default TodoNew;

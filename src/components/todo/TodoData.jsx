const TodoData = (props) => {
  const { todos, deleteTodo } = props;

  const handleClicked = (id) => {
    deleteTodo(id);
  };

  return (
    <>
      <div className="todo-data">
        {todos.map((item, index) => (
          <div key={item.id} className="todo-item">
            <div>{item.name}</div>
            <button
              style={{ cursor: "pointer" }}
              onClick={() => handleClicked(item.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
      {/* <div className="button-container">
        <button className="btn">Start</button>
        <button className="btn">End</button>
      </div> */}
    </>
  );
};

export default TodoData;

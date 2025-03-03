const TodoData = (props) => {
  const { name, age, data, todos } = props;
  const { address, country } = data;

  return (
    <>
      <div className="todo-data">
        {todos.map((item, index) => (
          <div key={item.id} className="todo-item">
            <div>{item.name}</div>
            <button onClick={() => {}}> Delete</button>
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

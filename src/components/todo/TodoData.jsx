const TodoData = (props) => {
  const { name, age, data, todo } = props;
  const { address, country } = data;

  return (
    <>
      <div className="todo-data">
        <div>{name}</div>
        <div>{age}</div>
        <div>{address}</div>
        <div>{country}</div>
        <div>{JSON.stringify(todo)}</div>
      </div>
      {/* <div className="button-container">
        <button className="btn">Start</button>
        <button className="btn">End</button>
      </div> */}
    </>
  );
};

export default TodoData;

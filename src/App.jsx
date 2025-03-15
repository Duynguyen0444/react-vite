import "./components/todo/todo.css";
import TodoData from "./components/todo/TodoData";
import TodoNew from "./components/todo/TodoNew";
import reactLogo from "./assets/react.svg";
import { Fragment, useState } from "react";
import Header from "./components/layouts/header";
import Footer from "./components/layouts/footer";
import { Outlet } from "react-router-dom";

const App = () => {
  const name = "React";
  const age = 27;
  const data = {
    address: "Bangalore",
    country: "India",
  };

  const [todos, setTodos] = useState([]);

  const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const addNewTodo = (value) => {
    const newTodo = {
      id: randomIntFromInterval(1, 9999),
      name: value,
    };

    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter((item) => item.id !== id);
    setTodos(newTodos);
  };

  return (
    <Fragment>
      <Header />
      <div className="todo-container">
        <div className="todo-title">Todo</div>
        {/* <FormStep5 /> */}
        <TodoNew addNewTodo={addNewTodo} />
        {todos.length > 0 ? (
          <TodoData
            name={name}
            age={age}
            data={data}
            todos={todos}
            deleteTodo={deleteTodo}
          />
        ) : (
          <div className="todo-image">
            <img src={reactLogo} className="logo" alt="Vite logo" />
          </div>
        )}
      </div>
      <Outlet />
      <Footer />
    </Fragment>
  );
};

export default App;

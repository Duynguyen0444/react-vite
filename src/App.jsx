import "./components/todo/todo.css";
import TodoData from "./components/todo/TodoData";
import TodoNew from "./components/todo/TodoNew";
import reactLogo from "./assets/react.svg";
import { useState } from "react";
import ToggleButton from "./components/toggle";
import Form from "./components/Form";

const App = () => {
  const name = "React";
  const age = 27;
  const data = {
    address: "Bangalore",
    country: "India",
  };

  const [image, setImage] = useState(null);
  const [todos, setTodos] = useState([
    { id: 1, name: "Learn React" },
    { id: 2, name: "Learn Vue" },
    { id: 3, name: "Learn Angular" },
  ]);

  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result); // Chuyển sang Base64
      reader.onerror = (error) => reject(error);
    });
  };

  const handleFileUpload = async (event) => {
    // const file = event.target.files[0];

    // if (file) {
    //   const base64String = await convertToBase64(file);

    //   setImage(base64String);
    //   console.log(base64String); // Đây là chuỗi Base64
    // }
    // console.log(event.target.files);

    const file = event.target.files[0]; // Get the first selected file
    if (file) {
      const imageURL = URL.createObjectURL(file); // Create a preview URL
      setImage(imageURL);
    }
  };

  const handleToggleChange = (e) => {
    console.log("Value checked: ", e.target.checked);
    setIsSwitchOn(e.target.checked);
  };

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

  return (
    <div className="todo-container">
      <div className="todo-title">Todo</div>
      <TodoNew addNewTodo={addNewTodo} />
      <TodoData name={name} age={age} data={data} todos={todos} />

      {/* <div className="todo-image">
        <img src={reactLogo} className="logo" alt="Vite logo" />
      </div> */}
      {/* <div>
        <input type="file" accept="image/*" onChange={handleFileUpload} />;
        {image && (
          <img
            src={image}
            alt="Preview"
            style={{ width: "200px", marginTop: "10px" }}
          />
        )}
      </div> */}
      {/* <ToggleButton checked={isSwitchOn} onChange={handleToggleChange} /> */}
    </div>
  );
};

export default App;

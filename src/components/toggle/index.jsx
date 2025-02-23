import { useState } from "react";
import "./styles.css"; // Make sure to create this CSS file

const ToggleButton = (props) => {
  const { onChange, checked } = props;
  // const [isOn, setIsOn] = useState(false);

  // const handleChange = (e) => {
  //   console.log(e);

  //   onChange(e.target.checked); // Pass the checked value to the parent
  // };

  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange} // Passes the event to the parent
      />
      <span className="slider"></span>
    </label>
  );
};

export default ToggleButton;

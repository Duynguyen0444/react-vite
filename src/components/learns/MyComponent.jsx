import { Fragment } from "react";
import "./styles.css";

const MyComponent = () => {
  const name = "MyComponent";
  const undefinedVariable = undefined;
  const arrays = [1, 2, 3, 4, 5];
  const objects = { name: "MyComponent", age: 30 };

  return (
    <Fragment>
      <div className="child">
        {name} - {undefinedVariable}
      </div>

      {/* Convert the following arrays and objects to String: */}
      <div>{JSON.stringify(objects)}</div>
      <div>{JSON.stringify(arrays)}</div>

      <div style={{ borderRadius: 20 }}>MyComponent 1</div>
    </Fragment>
  );
};

export default MyComponent;

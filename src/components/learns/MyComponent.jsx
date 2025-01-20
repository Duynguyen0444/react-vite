import { Fragment } from "react";
import "./styles.css";

const MyComponent = () => {
  return (
    <Fragment>
      <div className="child">MyComponent</div>
      <div style={{ borderRadius: 20 }}>MyComponent 1</div>
    </Fragment>
  );
};

export default MyComponent;

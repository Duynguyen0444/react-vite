import "./components/todo/todo.css";
import { Fragment } from "react";

import Header from "./components/layouts/header";
import Footer from "./components/layouts/footer";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <Fragment>
      <Header />
      <Outlet />
      <Footer />
    </Fragment>
  );
};

export default App;

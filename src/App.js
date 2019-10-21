import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import "./scss/screen.scss";

const App = () => {
  return (
    <div className={"container-fluid"}>
      <Header />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));

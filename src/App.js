import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import "./App.scss";

const App = () => {
  return (
    <div className={"container-fluid"}>
      <Header />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));

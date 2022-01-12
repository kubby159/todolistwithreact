import React from "react";
import Header from "./components/Header";
import Todolist from "./components/Todolist";
import Listitemadd from "./components/Listitemadd";
import "./scss/style.scss";

function App() {
  return (
    <div className="layout-container">
      <div className="container-inner">
        <Header />
      </div>
      <div className="todolist-container">
        <Listitemadd />
      </div>
    </div>
  );
}

export default App;

import React from "react";
import Listitem from "./Listitem";
import "../scss/todolist.scss";
const Todolist = () => {
  return (
    <>
      <ul className="todolist-ul">
        <Listitem />
      </ul>
    </>
  );
};

export default Todolist;

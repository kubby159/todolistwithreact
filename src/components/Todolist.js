import React from "react";
import Listitem from "./Listitem";
import "../scss/todolist.scss";
const Todolist = ({ msg }) => {
  return (
    <>
      <ul className="todolist-ul">
        {msg.map((info) => {
          return <li key={info.id}>{info.content}</li>;
        })}
      </ul>
    </>
  );
};

export default Todolist;

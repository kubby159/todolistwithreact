import React, { useState } from "react";

import "../scss/writetodo.scss";
import Todolist from "./Todolist";
const Listitemadd = () => {
  const [onSwitch, setSwitch] = useState(false);
  const [content, setContent] = useState("");
  const [msg, setMsg] = useState([]);
  function onClick() {
    setSwitch(!onSwitch);
  }

  function disappearWriteList() {
    setSwitch(!onSwitch);
    let list = {
      id: msg.length,
      content: content,
      checked: false,
    };
    if (msg.length < 4) {
      setMsg([list, ...msg]);
    } else {
      alert("Stop");
      setMsg([list]);
    }

    setContent(" ");
  }

  function onChange(event) {
    setContent(event.target.value);
  }

  return (
    <>
      {onSwitch ? (
        <div className="writetodo-container">
          <div className="list-input">
            <input
              type="text"
              placeholder="할 일을 적어주세요!"
              value={content}
              onChange={onChange}
            ></input>
            <div className="list-up" onClick={disappearWriteList}>
              <div className="list-up-btn">ADD</div>
            </div>
          </div>
        </div>
      ) : null}
      {onSwitch ? null : <Todolist msg={msg} />}
      <div className="listitem-add" onClick={onClick}>
        <div className="listitem-btn">
          <i className="fas fa-plus"></i>
        </div>
      </div>
    </>
  );
};

export default Listitemadd;

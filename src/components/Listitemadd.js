import React, { useState } from "react";
import Writetodo from "./Writetodo";

const Listitemadd = () => {
  const [onSwitch, setSwitch] = useState(false);
  const [displayState, setDisplayState] = useState("block");
  function onClick() {
    setSwitch(!onSwitch);
    console.log(onSwitch);
  }

  function disappearWriteList() {
    setSwitch(!onSwitch);
  }

  return (
    <>
      {onSwitch ? (
        <div className="writetodo-container">
          <div className="list-input">
            <input type="text" placeholder="할 일을 적어주세요!"></input>
            <div className="list-up" onClick={disappearWriteList}>
              <div className="list-up-btn">ADD</div>
            </div>
          </div>
        </div>
      ) : null}
      <div className="listitem-add" onClick={onClick}>
        <div className="listitem-btn">
          <i className="fas fa-plus"></i>
        </div>
      </div>
    </>
  );
};

export default Listitemadd;

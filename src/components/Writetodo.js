import React, { useState } from "react";
import "../scss/writetodo.scss";

const Writetodo = () => {
  const [onSwitch, setSwitch] = useState(true);

  function disappearWriteList() {
    setSwitch(!onSwitch);
  }
  return (
    <>
      <div className="writetodo-container">
        <div className="list-input">
          <input type="text" placeholder="할 일을 적어주세요!"></input>
          <div className="list-up" onClick={disappearWriteList}>
            <div className="list-up-btn">ADD</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Writetodo;

import React from "react";
import { useState } from "react/cjs/react.development";

import "../scss/todolist.scss";

const Todolist = ({ msg }) => {
  const [onToggle, setToggle] = useState(false);
  const [listInMsg, setListInMsg] = useState([...msg]);

  const isCompeleted = (currentValue) => {
    return currentValue.checked === true;
  };

  const handleChecked = (id) => {
    setToggle(!onToggle);
    setListInMsg(
      listInMsg.map((todo) => {
        return todo.id === id ? { ...todo, checked: !todo.checked } : todo;
      })
    );
  };

  const onRemove = (id) => {
    setListInMsg(
      listInMsg.filter((todo) => {
        return todo.id !== id;
      })
    );
  };

  return (
    <>
      <ul className="todolist-ul">
        {listInMsg.map((info) => {
          return (
            <li key={info.id} className="list-item">
              <div className="list-content">
                <span
                  style={
                    info.checked
                      ? {
                          textDecoration: "line-through",
                          color: "rgb(169,169,169,0.4)",
                        }
                      : null
                  }
                >
                  {info.content}
                </span>
              </div>
              <div className="list-icon">
                <span>
                  <i
                    id={info.id}
                    className="far fa-check-circle"
                    onClick={() => handleChecked(info.id)}
                    style={info.checked ? { color: "#3eff94" } : null}
                  ></i>
                </span>
                <span>
                  <i
                    className="far fa-trash-alt"
                    onClick={() => {
                      onRemove(info.id);
                    }}
                    style={info.checked ? { color: "#ff0001" } : null}
                  ></i>
                </span>
              </div>
            </li>
          );
        })}
      </ul>
      <div className="Cheer-Msg">
        {listInMsg.length > 0 ? (
          listInMsg.every(isCompeleted) ? (
            <span>고생하셨어요!</span>
          ) : (
            <span>좀만힘내요!</span>
          )
        ) : null}
      </div>
    </>
  );
};

export default Todolist;

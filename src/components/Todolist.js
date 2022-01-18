import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";

import "../scss/todolist.scss";
import CheerMsg from "./CheerMsg";
import Todoitem from "./Todoitem";

const Todolist = () => {
  // todo
  const [content, setContent] = useState("");
  const [todo, setTodo] = useState([]);
  const [checkedState, setcheckedState] = useState(false);

  function typeTodo(e) {
    setContent(e.target.value);
  }

  function upLoadTodo() {
    let todos = {
      id: todo.length,
      content: content,
      checked: false,
    };

    setTodo([todos, ...todo]);
    setContent(" ");
  }
  const onToggle = (id) => {
    setTodo(
      todo.map((todo) => {
        return todo.id === id ? { ...todo, checked: !todo.checked } : todo;
      })
    );
  };

  const removeItem = (id) => {
    setTodo(
      todo.filter((todo) => {
        return todo.id !== id;
      })
    );
  };
  return (
    <>
      <div className="todolist-inner">
        <div className="todolist-input">
          <div className="lay-out"></div>
          <div className="lay-out"></div>
          <input
            type="text"
            placeholder="할 일을 적어주세요"
            className="todolist-input"
            value={content}
            onChange={typeTodo}
          />
          <button className="upload-btn" onClick={upLoadTodo}>
            ADD
          </button>
        </div>

        <ul className="todo-ul">
          {todo.map((todo) => (
            <Todoitem todo={todo} removeItem={removeItem} onToggle={onToggle} />
          ))}
        </ul>
        {todo.every((e) => e.checked === true) ? (
          <div className="cherrMsg">{<CheerMsg todo={todo} />}</div>
        ) : null}
      </div>
    </>
  );
};

export default Todolist;

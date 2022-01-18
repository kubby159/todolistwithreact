import React from "react";
import "../scss/todoitem.scss";
function Todoitem({ todo, removeItem, onToggle }) {
  const { id, content, checked } = todo;

  return (
    <>
      <li
        className="todo-item"
        key={id}
        id={id}
        style={checked ? { borderColor: "#00fb9a" } : null}
      >
        <button
          onClick={() => onToggle(id)}
          style={checked ? { color: "#00fb9a" } : null}
          className="checked-btn"
        >
          <i class="far fa-check-circle"></i>
        </button>

        <span
          style={
            checked
              ? { textDecoration: "line-through", color: "#dcdcdc" }
              : { color: "black" }
          }
          className="todoitem-content"
        >
          {content}
        </span>
        <button
          key={id}
          id={id}
          onClick={() => {
            removeItem(id);
          }}
          className="todoitem-delete"
        >
          <i className="far fa-trash-alt"></i>
        </button>
      </li>
    </>
  );
}

export default Todoitem;

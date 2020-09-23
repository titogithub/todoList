import React from "react";
import { useDispatch } from "react-redux";
import cx from "classnames";
import { toggleTodo } from "../ducks/todoList";

const Todo = ({ todo }) => {
  const dispatch = useDispatch();
  const handleToggleTodo  = () => { console.log('todo: ', todo); return dispatch(toggleTodo(todo.id)) };
  return (
    <li className="todo-item" onClick={handleToggleTodo}>
      {todo && todo.completed ? "👌" : "👋"}{" "}
      <span
        className={cx(
          "todo-item__text",
          todo && todo.completed && "todo-item__text--completed"
        )}
      >
        {todo.content}
      </span>
    </li>
  );
};

export default Todo;

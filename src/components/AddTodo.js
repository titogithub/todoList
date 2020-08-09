import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../ducks/todoList";

const AddTodo = props => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  const handleCreate = () => {
    dispatch(addTodo(input));
    setInput('');
  }

  return (
    <div>
      <input value={input} onChange={e => setInput(e.target.value)} />
      <button className="add-todo" onClick={handleCreate}>
        Add Todo
      </button>
    </div>
  );
};

export default AddTodo;

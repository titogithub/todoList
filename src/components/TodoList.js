import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Todo from "./Todo";
import { VISIBILITY_FILTERS } from "../constants";

const TodoList = () => {
  const visibilityFilter = useSelector(state => state.visibilityFilter);
  const allTodos = useSelector(state => state.todoList);

  useEffect(() => {
    console.log('useEffect TodoList: ', allTodos);
  },[allTodos])

  console.log('all todos: ', allTodos);
  const todos =
    visibilityFilter === VISIBILITY_FILTERS.ALL
      ? allTodos
      : visibilityFilter === VISIBILITY_FILTERS.COMPLETED
      ? allTodos.filter(todo => todo.completed)
      : allTodos.filter(todo => !todo.completed);

  return (
    <ul className="todo-list">
      {todos && todos.length
        ? todos.map((todo, index) => {
            console.log('todos: ', todos);
            return <Todo key={`todo-${todo.id}`} todo={todo} />;
          })
        : "No todos, yay!"}
    </ul>
  );
};

export default TodoList;

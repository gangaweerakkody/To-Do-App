import React from 'react';
import TodoList from '../Components/TodoList';

const ActiveTodos = ({ todos, ...rest }) => {
  const active = todos.filter((todo) => !todo.completed);
  return <TodoList todos={active} {...rest} />;
};

export default ActiveTodos;

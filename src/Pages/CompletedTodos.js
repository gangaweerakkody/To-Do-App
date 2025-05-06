import React from 'react';
import TodoList from '../Components/TodoList';

const CompletedTodos = ({ todos, ...rest }) => {
  const completed = todos.filter((todo) => todo.completed);
  return <TodoList todos={completed} {...rest} />;
};

export default CompletedTodos;

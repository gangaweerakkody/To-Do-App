import React from 'react';
import TodoItem from './TodoItem';
import { List } from '@mui/material';

function TodoList({ todos, toggleComplete, deleteTodo, editTodo }) {
  return (
    <List>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
      ))}
    </List>
  );
}

export default TodoList;

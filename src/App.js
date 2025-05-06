import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './Components/Header';
import TodoForm from './Components/TodoForm';
import AllTodos from './Pages/AllTodos';
import ActiveTodos from './Pages/ActiveTodos';
import CompletedTodos from './Pages/CompletedTodos';
import { Container, Paper } from '@mui/material';

function App() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem('todos');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([newTodo, ...todos]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id, newText) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} style={{ padding: '20px', marginTop: '40px' }}>
        <Header />
        <TodoForm addTodo={addTodo} />
        <Routes>
          <Route
            path="/"
            element={<Navigate to="/all" />}
          />
          <Route
            path="/all"
            element={
              <AllTodos
                todos={todos}
                toggleComplete={toggleComplete}
                deleteTodo={deleteTodo}
                editTodo={editTodo}
              />
            }
          />
          <Route
            path="/active"
            element={
              <ActiveTodos
                todos={todos}
                toggleComplete={toggleComplete}
                deleteTodo={deleteTodo}
                editTodo={editTodo}
              />
            }
          />
          <Route
            path="/completed"
            element={
              <CompletedTodos
                todos={todos}
                toggleComplete={toggleComplete}
                deleteTodo={deleteTodo}
                editTodo={editTodo}
              />
            }
          />
        </Routes>
      </Paper>
    </Container>
  );
}

export default App;

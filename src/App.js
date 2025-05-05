import React, {useState, useEffect} from 'react';
import { Container, Paper } from '@mui/material';
import Header from './Components/Header';
import TodoForm from './Components/TodoForm';
import TodoList from './Components/TodoList';
function App() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem('todos');
    return saved ? JSON.parse(saved) : [];
  });

  const [ filter, setFilter] = useState('all');
  const [ search, setSearch] = useState('');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }
  , [todos]);
  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos( [newTodo, ...todos]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? {...todo, completed: !todo.completed} : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

 const editTodo = (id, newText) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? {...todo, text: newText} : todo
      )
    );
  };

  const filteredTodos = todos.filter((todo) => {
   const matchFilter = filter === 'all' ? true : filter === 'completed' ? todo.completed : !todo.completed;
   const matchSearch = todo.text.toLowerCase().includes(search.toLowerCase());
   return matchFilter && matchSearch;
  });


  return (
    <Container maxWidth="sm">
    <Paper elevation={3} style={{ padding: '20px', marginTop: '40px' }}>
      <Header
        filter={filter}
        setFilter={setFilter}
        search={search}
        setSearch={setSearch}
      />
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={filteredTodos}
        toggleComplete={toggleComplete}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
      />
    </Paper>
  </Container>
);
}



export default App;

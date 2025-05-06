import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

function TodoForm({ addTodo }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: 10, marginBottom: 20 }}>
      <TextField
        fullWidth
        value={text}
        onChange={(e) => setText(e.target.value)}
        variant="outlined"
        size="small"
        label="New Task"
      />
      <Button type="submit" variant="contained">
        Add
      </Button>
    </form>
  );
}

export default TodoForm;

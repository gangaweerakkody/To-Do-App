import React, { useState } from 'react';
import {
  ListItem,
  Checkbox,
  IconButton,
  TextField,
  Typography,
} from '@mui/material';
import { Delete, Edit, Save } from '@mui/icons-material';

function TodoItem({ todo, toggleComplete, deleteTodo, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(todo.text);

  const handleEdit = () => {
    if (isEditing && text.trim()) {
      editTodo(todo.id, text);
    }
    setIsEditing(!isEditing);
  };

  return (
    <ListItem
      divider
      secondaryAction={
        <>
          <IconButton onClick={handleEdit}>
            {isEditing ? <Save /> : <Edit />}
          </IconButton>
          <IconButton onClick={() => deleteTodo(todo.id)}>
            <Delete />
          </IconButton>
        </>
      }
    >
      <Checkbox
        checked={todo.completed}
        onChange={() => toggleComplete(todo.id)}
      />
      {isEditing ? (
        <TextField
          fullWidth
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      ) : (
        <Typography
          variant="body1"
          style={{
            textDecoration: todo.completed ? 'line-through' : 'none',
            width: '100%',
          }}
        >
          {todo.text}
        </Typography>
      )}
    </ListItem>
  );
}

export default TodoItem;

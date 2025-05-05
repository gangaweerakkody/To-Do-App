import React from 'react';
import { TextField, ToggleButtonGroup, ToggleButton } from '@mui/material';

function Header({ filter, setFilter, search, setSearch }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <ToggleButtonGroup
        value={filter}
        exclusive
        onChange={(e, newFilter) => setFilter(newFilter || 'all')}
      >
        <ToggleButton value="all">All</ToggleButton>
        <ToggleButton value="active">Active</ToggleButton>
        <ToggleButton value="completed">Completed</ToggleButton>
      </ToggleButtonGroup>

      <TextField
        fullWidth
        variant="outlined"
        size="small"
        placeholder="Search tasks..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginTop: 10 }}
      />
    </div>
  );
}

export default Header;

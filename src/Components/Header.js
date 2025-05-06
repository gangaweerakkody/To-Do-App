import React from 'react';
import { NavLink } from 'react-router-dom';
import { ToggleButtonGroup, ToggleButton } from '@mui/material';

function Header() {
  return (
    <ToggleButtonGroup exclusive fullWidth style={{ marginBottom: '16px' }}>
      <ToggleButton value="all" component={NavLink} to="/all">
        All
      </ToggleButton>
      <ToggleButton value="active" component={NavLink} to="/active">
        Active
      </ToggleButton>
      <ToggleButton value="completed" component={NavLink} to="/completed">
        Completed
      </ToggleButton>
    </ToggleButtonGroup>
  );
}

export default Header;

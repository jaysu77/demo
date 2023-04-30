import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import '../../static/css/App.css'


function Header() {
  return (
    <AppBar position="static" className="header">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold', color: 'white' }}>
          Scotia Wealth
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;

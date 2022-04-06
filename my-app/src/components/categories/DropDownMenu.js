import * as React from 'react';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Check from '@mui/icons-material/Check';

export default function DropDownMenu(props) {
  
  console.log('DropDownMenu');
  return (
    <Paper sx={{ width: 320 }}
    style = {props.style}>
      <p>Heeeeyy
      </p>
      <p>
        Hoooppp
      </p>
    </Paper>
  );
}
import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";

const MainListItems = (props) => {
  return (
    <React.Fragment>
      <ListSubheader component="div" inset>
        Manage Products
      </ListSubheader>
      <ListItemButton
        onClick={() => {
          props.aCat();
        }}
      >
        <ListItemIcon>
          <AddIcon />
        </ListItemIcon>
        <ListItemText primary="Add Category" />
      </ListItemButton>
      <ListItemButton
        onClick={() => {
          props.dCat();
        }}
      >
        <ListItemIcon>
          <DeleteIcon />
        </ListItemIcon>
        <ListItemText primary="Delete Category" />
      </ListItemButton>
      <ListItemButton
        onClick={() => {
          props.aPro();
        }}
      >
        <ListItemIcon>
          <AddIcon />
        </ListItemIcon>
        <ListItemText primary="Add Product" />
      </ListItemButton>
      <ListItemButton
        onClick={() => {
          props.dPro();
        }}
      >
        <ListItemIcon>
          <DeleteIcon />
        </ListItemIcon>
        <ListItemText primary="Delete Product" />
      </ListItemButton>
      <ListItemButton
        onClick={() => {
          props.aCat();
        }}
      >
        <ListItemIcon>
          <ManageSearchIcon />
        </ListItemIcon>
        <ListItemText primary="Manage Stocks" />
      </ListItemButton>
    </React.Fragment>
  );
};

export default MainListItems;

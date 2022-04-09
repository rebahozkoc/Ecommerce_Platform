import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";

import { Paper } from "@mui/material";


const Column = (props) => {
    const columnItems = props.columnItems
  return (
    <Box sx={{ width: "100%", maxWidth: 300, minWidth: 250}}>
      <nav aria-label="category-items">
        <List
        dense>
          {columnItems.map((item) => (
            <ListItem>
              <ListItemButton>
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </nav>
    </Box>
  );
};

export default Column;

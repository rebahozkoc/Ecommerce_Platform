import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import AssignmentIcon from "@mui/icons-material/Assignment";

const SecondaryListItems = () => {
  return (
    <React.Fragment>
      <ListSubheader component="div" inset>
        Manage Delivery
      </ListSubheader>
      <ListItemButton>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="View Invoices" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Ordered Products" />
      </ListItemButton>
    </React.Fragment>
  );
};

export default SecondaryListItems;

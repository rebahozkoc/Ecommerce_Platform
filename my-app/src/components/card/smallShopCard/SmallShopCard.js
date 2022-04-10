import * as React from "react";
import { styled, useTheme, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";

import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Typography } from "@mui/material";
import SmallItem from "./SmallItem";
const drawerWidth = 240;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

const SmallShopCard = (props) => {
  const theme = useTheme();
  const open = true;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <DrawerHeader sx={{ backgroundColor: "#ffb74d" }}>
          <Typography variant="h6">Shopping Basket</Typography>
          <Box sx={{ marginLeft: "auto" }}>
            <IconButton onClick={props.onConfirm}>
              <CloseIcon></CloseIcon>
            </IconButton>
          </Box>
        </DrawerHeader>
        <Divider />
        <List>
          {props.cards.map((card) => (
            <Box sx={{ height: "50" }}>
              <ListItem button key={card}>
                <SmallItem></SmallItem>
              </ListItem>
            </Box>
          ))}
        </List>
        <Divider />
      </Drawer>
    </Box>
  );
};
export default SmallShopCard;

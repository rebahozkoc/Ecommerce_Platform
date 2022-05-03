import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

import { Popper, Stack } from "@mui/material";
import DropDownMenu from "./categories/DropDownMenu";

const pages = [
  "Living Room",
  "Bedroom",
  "Dining Room",
  "Kitchen",
  "Study Room",
  "Decoration",
];

const AppBarUnder = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
 
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : document.getElementById("myStack"));
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;
  return (
    <div>
      <AppBar position="static" color="inherit" id="myStack">
        <Container maxWidth="false">
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="medium"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              ></IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  // todo : handleCloseNavMenu
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Box
              sx={{
                flexGrow: 1,
                paddingBottom: 0,
                display: { xs: "none", md: "inline" },
              }}
            >
              <Stack
                direction="row"
                justifyContent="space-around"
                paddingBottom="0"
              >
                {pages.map((page, i) => (
                  <Button
                    aria-describedby={id}
                    onClick={handleClick}
                    key={i}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    {page}
                  </Button>
                ))}
              </Stack>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Popper
        id={id}
        open={open}
        anchorEl={anchorEl}
        placement="bottom-start"
        sx={{display: "block",  width: '100%' }}
      >
        <DropDownMenu />
      </Popper>
    </div>
  );
};
export default AppBarUnder;


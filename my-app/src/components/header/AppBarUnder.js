import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Grid";
import { Stack } from "@mui/material";

import DropDownMenu from "../categories/DropDownMenu";

const pages = [
  "Living Room",
  "Bedroom",
  "Dining Room",
  "Kitchen",
  "Study Room",
  "Decoration",
];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const [myStyle, setStyle] = React.useState({ display: "none" });

  const handleDropDownMenuOpen = () => {
    setStyle({ display: "block" });
  };

  const handleDropDownMenuClose = () => {
    setStyle({ display: "none" });
  };
  // Dropdown menu
  /*
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleHover = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  */

  return (
    <div>
    <AppBar position="static" color="inherit">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="medium"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
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
                <MenuItem
                 key={page} 
                 onClick={handleCloseNavMenu}
                 onMouseOver={handleDropDownMenuOpen}
                 onMouseLeave={handleDropDownMenuClose}
                 >
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "inline" } }}>
            <Stack
              direction="row"
              justifyContent="space-around"
              alignItems="center"
              spacing={2}
            >
              {pages.map((page) => (
                <Button
                  key={page}
                  onMouseOver={handleDropDownMenuOpen}
                  onMouseOut={handleDropDownMenuClose}
                  onClick={handleCloseNavMenu}
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
    <DropDownMenu style={myStyle}></DropDownMenu>
    </div>
    
  );
};
export default ResponsiveAppBar;

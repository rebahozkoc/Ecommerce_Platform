import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MoreIcon from "@mui/icons-material/MoreVert";
import SmallShopCard from "../card/smallShopCard/SmallShopCard";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import ClickAwayListener from "@mui/material/ClickAwayListener";

import { Link } from "react-router-dom";
let c = [
  {
    key: 61,
    imageId: "furn1.jpg",
    cost: 1200,
    title: "Sofa",
    description: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
  },
  {
    key: 62,
    imageId: "furn2.jpg",
    cost: 120,
    title: "Sofa",
    description: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
  },
  {
    key: 63,
    imageId: "furn3.jpg",
    cost: 1300,
    title: "Sofa",
    description: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
  },
  {
    key: 64,
    imageId: "furn4.jpg",
    cost: 1515,
    title: "Sofa",
    description: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
  },
  {
    key: 65,
    imageId: "furn5.jpg",
    cost: 121.22,
    title: "Sofa",
    description: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
  },
  {
    key: 66,
    imageId: "furn6.jpg",
    cost: 123.67,
    title: "Sofa",
    description: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
  },
];
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.secondary.main, 0.3),
  "&:hover": {
    backgroundColor: alpha(theme.palette.secondary.dark, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function PrimarySearchAppBar() {
  const [filter, setFilter] = React.useState(-1);

  const RemoveCardHand = (toDelete) => {
    setFilter(toDelete);
    console.log(filter);
  };
  const filterCards = () => {
    c = c.filter(function (card) {
      return card.key != filter;
    });

    console.log(c);
  };
  React.useEffect(() => {
    console.log(filter);
    filterCards();
    setFilter(-1);
  }, [filter]);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const [isLogged, setIsLogged] = React.useState(false);

  const [open, setOpen] = React.useState(false);

  const handleClickBasket = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAwayBasket = (e) => {
    if ("basket-button" !== e.path[2].id) {
      setOpen(false);
    }
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const logIn = () => {
    setIsLogged(true);
  };
  const logOut = () => {
    setIsLogged(false);
  };
  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>

      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );
  const renderMenu2 = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <nav>
        <Grid container spacing={2}>
          <Grid item xs={7} sm={4}>
            <Link
              to="/SignIn"
              style={{ textDecoration: "none", color: "black" }}
            >
              <Button>Sign In</Button>
            </Link>
          </Grid>
          <Grid item xs={8} sm={7}>
            <Link
              to="/SignUp"
              style={{ textDecoration: "none", color: "black" }}
            >
              <Button>Create Account</Button>
            </Link>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          style={{ minHeight: "4vh" }}
        >
          <Grid item xs={3}>
            <Link
              to="/Dummy"
              style={{ textDecoration: "none", color: "black" }}
            >
              <Button onClick={handleMenuClose}>Orders</Button>
            </Link>
          </Grid>
        </Grid>
      </nav>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleProfileMenuOpen}>
        <Link to="/Dummy" style={{ textDecoration: "none", color: "black" }}>
          <Button
            size="large"
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircle />
          </Button>
        </Link>
        <p>Profile</p>
      </MenuItem>
      <MenuItem>
        <Link to="/Dummy" style={{ textDecoration: "none", color: "black" }}>
          <Button size="large" color="inherit">
            <Badge badgeContent={17} color="primary">
              <FavoriteOutlinedIcon />
            </Badge>
          </Button>
        </Link>
        <p>Favourites</p>
      </MenuItem>
      <MenuItem>
        <Button
          id="basket-button"
          value="basket-button-value"
          size="large"
          aria-label="show items on the basket"
          color="inherit"
          onClick={handleClickBasket}
        >
          <Badge badgeContent={4} color="primary">
            <ShoppingBasketOutlinedIcon />
          </Badge>
        </Button>
        <p>Basket</p>
      </MenuItem>
    </Menu>
  );

  return (
    <AppBar position="sticky" elevation={0} color="inherit">
      <Toolbar>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
        <Box sx={{ flexGrow: 1 }}> </Box>
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          <Typography
            variant="h3"
            noWrap
            component="div"
            sx={{ m: 2, display: { xs: "none", sm: "block" } }}
          >
            Voidture
          </Typography>
        </Link>

        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <Box
            sx={{
              fontWeight: "bold",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Button
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
              <Box sx={{ fontSize: 8 }}>
                <div>&nbsp;</div> Profile
              </Box>
            </Button>
          </Box>
          <Box
            sx={{
              fontWeight: "bold",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Link
              to="/Dummy"
              style={{ textDecoration: "none", color: "black" }}
            >
              <Button
                size="large"
                aria-label="show 4 new mails"
                color="inherit"
              >
                <Badge badgeContent={4} color="primary">
                  <FavoriteOutlinedIcon />
                </Badge>
                <Box sx={{ fontSize: 8 }}>
                  <div>&nbsp;</div> Favourites
                </Box>
              </Button>
            </Link>
          </Box>
          <Button
            id="basket-button"
            size="large"
            value="basket-button-value"
            aria-label="show 17 new notifications"
            color="inherit"
            onClick={handleClickBasket}
          >
            <Badge badgeContent={17} color="primary">
              <ShoppingBasketOutlinedIcon />
            </Badge>
            <Box sx={{ fontSize: 8 }}>
              <div>&nbsp;</div> Basket
            </Box>
          </Button>
        </Box>
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <Button
            size="large"
            aria-label="show more"
            aria-controls={mobileMenuId}
            aria-haspopup="true"
            onClick={handleMobileMenuOpen}
            color="inherit"
          >
            <MoreIcon />
          </Button>
        </Box>
      </Toolbar>
      {renderMobileMenu}
      {isLogged && renderMenu}
      {!isLogged && renderMenu2}

      <ClickAwayListener onClickAway={handleClickAwayBasket}>
        <Box>
          {open && (
            <SmallShopCard
              onConfirm={handleClickBasket}
              cards={c}
              removeCard={RemoveCardHand}
            ></SmallShopCard>
          )}
        </Box>
      </ClickAwayListener>
    </AppBar>
  );
}

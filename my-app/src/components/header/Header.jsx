import Hover from "./hover/Hover";
import { styled } from "@mui/material/styles";
import {
  AppBar,
  Typography,
  Grid,
  Toolbar,
  Container,
  Box,
  BottomNavigation,
  BottomNavigationAction,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: "flex-start",
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(2),
  color: "black",

  // Override media queries injected by theme.mixins.toolbar
  "@media all": {
    minHeight: 30,
  },
}));

const Header = () => {
  const categoriesArr = [
    { id: 1, name: "Home version 1" },
    { id: 2, name: "Home version 2" },
    { id: 3, name: "Home version 3" },
    { id: 4, name: "Home version 4" },
    { id: 5, name: "Home version 5" },
    { id: 6, name: "Home version 6" },
    { id: 7, name: "Home version 7" },
    { id: 8, name: "Home version 8" },
  ];
  const categoriesL = [
    { id: 1, name: "item 1" },
    { id: 2, name: "item 2" },
    { id: 3, name: "item 3" },
    { id: 4, name: "item 4" },
    { id: 5, name: "item 5" },
    { id: 6, name: "item 6" },
    { id: 7, name: "item 7" },
    { id: 8, name: "item 8" },
  ];

  return (
    <>
      <Grid sx={{ flexGrow: 0 }}>
        <AppBar
          position="static"
          style={{ backgroundColor: "#ebe9e1" }}
          disablegutters="true"
        >
          <StyledToolbar>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, alignSelf: "flex-end" }}
            >
              Welcome to Voidture
            </Typography>
          </StyledToolbar>
        </AppBar>
        <Container
          maxWidth="xxl"
          disablegutters="true"
          sx={{ bgcolor: "white", height: "10vh" }}
        >
          <BottomNavigation showLabels>
            <BottomNavigation showLabels>
              <Hover chi="Categories" lis={categoriesArr}></Hover>
              <Hover chi="Categories" lis={categoriesArr}></Hover>
              <Hover chi="Categories" lis={categoriesArr}></Hover>
              <Hover chi="Categories" lis={categoriesArr}></Hover>
            </BottomNavigation>
            <BottomNavigation showLabels>
              <BottomNavigationAction label="Recents" icon={<SearchIcon />} />
              <BottomNavigationAction
                label="Favorites"
                icon={<FavoriteBorderIcon />}
              />
              <BottomNavigationAction
                label="Nearby"
                icon={<AccountCircleOutlinedIcon />}
              />
            </BottomNavigation>
          </BottomNavigation>
        </Container>
      </Grid>
    </>
  );
};

export default Header;

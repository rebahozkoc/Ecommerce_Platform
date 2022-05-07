import React from "react";
import ReactDOM from "react-dom";
import {
  Container,
  Typography,
  Box,
  List,
  ListItem,
  Divider,
  Grid,
  Card,
  Stack,
  Button,
} from "@mui/material";
import PrimarySearchAppBar from "../header/AppBar";
import ResponsiveAppBar from "../header/AppBarUnder";
import Footer from "../footer/Footer";
import themeOptions from "../theme";
import { ThemeProvider } from "@emotion/react";
import ShoppingCard from "./ShoppingCard";
import { CssBaseline } from "@mui/material/";
import { Link } from "react-router-dom";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import { loggedState } from "../recoils/atoms";
import { useState, useEffect } from "react";
import {
  createShoppingDict,
  getDataWithoutAccess,
  getData,
  createOrderCookie,
  decreaseCardCookie,
} from "../recoils/getterFunctions";

//document.cookie = "orderList=1 2 2 3 3 2 2 2 2 4 3 4";
let mydict = createShoppingDict();

const ShoppingBasket = () => {
  console.log(mydict);

  const [isLoggin, setIsLogged] = useRecoilState(loggedState);
  const [filter, setFilter] = React.useState(-1);
  const [change1, setChange1] = React.useState(-1);
  const [change2, setChange2] = React.useState(-1);

  const [isLoaded, setLoaded] = useState(false);
  const [products, setProducts] = useState([]);

  //console.log(mydict);

  useEffect(() => {
    for (let proId in mydict) {
      console.log(proId);
      getDataWithoutAccess(
        `http://164.92.208.145/api/v1/products/${proId}`
      ).then((res) => {
        console.log(res.data);
        if (res.data.stock < mydict[res.data.id]) {
          mydict[res.data.id] = res.data.stock;
          if (!isLoggin) {
            createOrderCookie(mydict);
          }
        }
        setProducts((prev) => {
          return [...prev, res.data];
        });
      });
    }
    setLoaded(true);
  }, []);

  const removeCardHandler = (toDelete) => {
    setFilter(toDelete);
    console.log(filter);
  };

  const filterCards = () => {
    //need post request you can make it in useeffect
    delete mydict[filter];
    if (!isLoggin) {
      createOrderCookie(mydict);
    }
  };

  const incCard = () => {
    //need post request you can make it in useeffect
    for (let i = 0; i < products.length; i++) {
      if (products[i].id === change2) {
        if (mydict[change2] < products[i].id.stock) {
          mydict[change2]++;
          if (!isLoggin) {
            createOrderCookie(mydict);
          }
        }
        return;
      }
    }
  };

  const decCard = () => {
    //need post request you can make it in useeffect
    for (let i = 0; i < products.length; i++) {
      console.log(change2);
      if (products[i].id === change2) {
        if (mydict[change2] > 0) {
          mydict[change2]--;
          console.log(mydict);
          decreaseCardCookie();
          if (!isLoggin) {
            createOrderCookie(mydict);
          }
        }
        /*
        
        */
        return;
      }
    }
  };
  const decreaserHandler = (toChange) => {
    setChange2(toChange);
  };
  const increaserHandler = (toChange) => {
    setChange1(toChange);
  };
  React.useEffect(() => {
    filterCards();
    setFilter(-1);
  }, [filter]);

  React.useEffect(() => {
    decCard();

    setChange2(-1);
  }, [change2]);
  React.useEffect(() => {
    incCard();
    setChange1(-1);
  }, [change1]);
  let totalCost = 0;
  return (
    <RecoilRoot>
      <ThemeProvider theme={themeOptions}>
        <CssBaseline />
        <PrimarySearchAppBar></PrimarySearchAppBar>
        <ResponsiveAppBar></ResponsiveAppBar>
        <Box sx={{ m: 2 }} />
        <Container maxWidth="lg" sx={{}}>
          <Grid container spacing={2}>
            <Grid item key={1} xs={9}>
              <Box
                sx={{
                  padding: (2, 2, 2, 2),
                  backgroundColor: "white",
                }}
              >
                {isLoaded ? (
                  <List>
                    {products.map((card) => (
                      <ListItem key={card.id}>
                        <ShoppingCard
                          imageId={
                            card.photos[0] != null
                              ? card.photos[0].photo_url
                              : ""
                          }
                          model={card.model}
                          number={card.number}
                          cost={card.price}
                          description={card.description}
                          title={card.title}
                          id={card.id}
                          delete={removeCardHandler}
                          stock={card.stock}
                          count={mydict[card.id]}
                          dec={() => {
                            decreaserHandler(card.id);
                          }}
                          inc={() => {
                            increaserHandler(card.id);
                          }}
                        >
                          {(totalCost += card.price * mydict[card.id])}
                        </ShoppingCard>
                      </ListItem>
                    ))}
                  </List>
                ) : (
                  <div>Loading...</div>
                )}
                <Divider sx={{ size: 100 }} />
                <Link to="/" style={{ color: "black" }}>
                  <Typography sx={{ color: "black" }}>
                    {" "}
                    <ArrowBackIosOutlinedIcon />
                    Back to Shopping
                  </Typography>
                </Link>
              </Box>
            </Grid>

            <Grid item key={2} xs={3}>
              <Box
                sx={{
                  backgroundColor: "white",
                  overflow: "auto",
                }}
              >
                <Card sx={{ backgroundColor: "#EAECEC", borderRadius: 0 }}>
                  <Typography
                    align="center"
                    variant="body1"
                    color="text.secondary"
                    sx={{ fontSize: 20 }}
                  >
                    Order Summary
                  </Typography>
                </Card>
                <Card
                  elevation={0}
                  sx={{ padding: (2, 2, 2, 2), borderRadius: 0 }}
                >
                  <Stack direction="row">
                    <Typography
                      align="left"
                      variant="body1"
                      color="text.secondary"
                      sx={{ fontSize: 16 }}
                    >
                      Total Product
                    </Typography>
                    <Box sx={{ m: 2 }} />
                    <Typography
                      align="right"
                      variant="body1"
                      color="text.secondary"
                      fontWeight="bold"
                      sx={{ fontSize: 16 }}
                    >
                      {totalCost}$
                    </Typography>
                  </Stack>
                  <Box sx={{ m: 1 }} />
                  <Stack direction="row">
                    <Typography
                      align="left"
                      variant="body1"
                      color="text.secondary"
                      sx={{ fontSize: 16 }}
                    >
                      Delivery Fee
                    </Typography>
                    <Box sx={{ m: 2 }} />
                    <Typography
                      align="right"
                      variant="body1"
                      color="text.secondary"
                      fontWeight="bold"
                      sx={{ fontSize: 16 }}
                    >
                      10$
                    </Typography>
                  </Stack>
                  <Divider />
                  <Box sx={{ m: 1 }} />
                  <Stack direction="row">
                    <Typography
                      align="left"
                      variant="body1"
                      color="text.secondary"
                      sx={{ fontSize: 16 }}
                    >
                      Total
                    </Typography>
                    <Box sx={{ m: 2 }} />
                    <Typography
                      align="right"
                      variant="body1"
                      color="text.secondary"
                      fontWeight="bold"
                      sx={{ fontSize: 16 }}
                    >
                      {totalCost + 10}$
                    </Typography>
                  </Stack>
                </Card>
                <Stack justifyContent="center" alignItems="center">
                  {isLoggin && (
                    <Link
                      to="/address-list"
                      style={{
                        textDecoration: "none",
                        color: "black",
                      }}
                    >
                      <Button
                        variant="contained"
                        sx={{
                          backgroundColor: "#ff6600",
                          display: "block",
                          padding: (8, 1, 8, 1),
                          mb: 2,
                          justify: "center",
                        }}
                      >
                        <Typography sx={{ color: "black" }}>
                          Confirm Cart
                        </Typography>
                      </Button>
                    </Link>
                  )}
                  {!isLoggin && (
                    <Link
                      to="/SignIn"
                      style={{
                        textDecoration: "none",
                        color: "black",
                      }}
                    >
                      <Button
                        variant="contained"
                        sx={{
                          backgroundColor: "#ff6600",
                          display: "block",
                          padding: (8, 1, 8, 1),
                          mb: 2,
                          justify: "center",
                        }}
                      >
                        <Typography sx={{ color: "black" }}>
                          Sign In to Purchase
                        </Typography>
                      </Button>
                    </Link>
                  )}
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Container>
        <Box sx={{ m: 2 }} />
      </ThemeProvider>
      <Footer />
    </RecoilRoot>
  );
};
export default ShoppingBasket;

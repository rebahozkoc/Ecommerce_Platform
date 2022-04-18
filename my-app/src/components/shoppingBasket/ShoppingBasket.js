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
let c = [
  {
    key: 61,
    imageId: "furn1.jpg",
    cost: 1200,
    title: "Sofa",
    description: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    count: 2,
    stock: 40,
  },
  {
    key: 62,
    imageId: "furn2.jpg",
    cost: 120,
    title: "Sofa",
    description: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    count: 1,
    stock: 2,
  },
  {
    key: 63,
    imageId: "furn3.jpg",
    cost: 1300,
    title: "Sofa",
    description: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    count: 1,
    stock: 3,
  },
  {
    key: 64,
    imageId: "furn4.jpg",
    cost: 1515,
    title: "Sofa",
    description: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    count: 1,
    stock: 4,
  },
  {
    key: 65,
    imageId: "furn5.jpg",
    cost: 121.22,
    title: "Sofa",
    description: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    count: 6,
    stock: 6,
  },
  {
    key: 66,
    imageId: "furn6.jpg",
    cost: 123.67,
    title: "Sofa",
    description: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    count: 1,
    stock: 4123,
  },
];

const ShoppingBasket = () => {
  const [filter, setFilter] = React.useState(-1);
  const [change1, setChange1] = React.useState(-1);
  const [change2, setChange2] = React.useState(-1);

  const removeCardHandler = (toDelete) => {
    setFilter(toDelete);
    console.log(filter);
  };

  const filterCards = () => {
    c = c.filter(function (card) {
      return card.key != filter;
    });
  };

  const incCard = () => {
    for (let i = 0; i < c.length; i++) {
      if (c[i].key == change2) {
        if (c[i].count < c[i].stock) {
          c[i].count++;
        }
        return;
      }
    }
  };

  const decCard = () => {
    for (let i = 0; i < c.length; i++) {
      if (c[i].key == change1) {
        if (c[i].count > 0) {
          c[i].count--;
        }
        return;
      }
    }
  };
  const decreaserHandler = (toChange) => {
    setChange1(toChange);
  };
  const increaserHandler = (toChange) => {
    setChange2(toChange);
  };
  React.useEffect(() => {
    console.log(filter);
    filterCards();
    setFilter(-1);
  }, [filter]);

  React.useEffect(() => {
    incCard();
    setChange2(-1);
  }, [change2]);
  React.useEffect(() => {
    decCard();
    setChange1(-1);
  }, [change1]);
  let totalCost = 0;
  return (
    <>
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
                <List>
                  {c.map((card) => (
                    <ListItem button key={card.key}>
                      <ShoppingCard
                        imageId={card.imageId}
                        cost={card.cost}
                        description={card.description}
                        title={card.title}
                        id={card.key}
                        delete={removeCardHandler}
                        stock={card.stock}
                        count={card.count}
                        dec={decreaserHandler}
                        inc={increaserHandler}
                      >
                        {(totalCost += card.cost * card.count)}
                      </ShoppingCard>
                    </ListItem>
                  ))}
                </List>
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
                <Card sx={{ backgroundColor: "#EAECEC" }}>
                  <Typography
                    align="center"
                    variant="body1"
                    color="text.secondary"
                    sx={{ fontSize: 20 }}
                  >
                    Order Summary
                  </Typography>
                </Card>
                <Card sx={{ padding: (2, 2, 2, 2) }}>
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
                  <Link
                    to="/Dummy"
                    style={{
                      textDecoration: "none",
                      color: "black",
                    }}
                  >
                    <Button
                      fullWidth
                      variant="contained"
                      sx={{
                        backgroundColor: "#ff6600",
                        display: "block",
                        padding: (8, 1, 8, 1),
                        justify: "center",
                      }}
                    >
                      <Typography sx={{ color: "black" }}>
                        Confirm Card
                      </Typography>
                    </Button>
                  </Link>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Container>
        <Box sx={{ m: 2 }} />
      </ThemeProvider>
      <Footer />
    </>
  );
};
export default ShoppingBasket;

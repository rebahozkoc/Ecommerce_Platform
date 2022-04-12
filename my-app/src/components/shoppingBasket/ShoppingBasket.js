import React from "react";
import ReactDOM from "react-dom";
import { Container, Typography, Box } from "@mui/material";
import PrimarySearchAppBar from "../header/AppBar";
import ResponsiveAppBar from "../header/AppBarUnder";
import Footer from "../footer/Footer";
import themeOptions from "../theme";
import { ThemeProvider } from "@mui/material";
import ShoppingCard from "./ShoppingCard";
const ShoppingBasket = () => {
  return (
    <>
      <ThemeProvider theme={themeOptions}>
        <PrimarySearchAppBar></PrimarySearchAppBar>
        <ResponsiveAppBar></ResponsiveAppBar>
        <Box sx={{ m: 2 }} />
        <Container maxWidth="lg">
          <Box
            sx={{ bgcolor: "#cfe8fc", height: "100vh", padding: (2, 2, 2, 2) }}
          >
            <ShoppingCard></ShoppingCard>
          </Box>
        </Container>
        <Box sx={{ m: 2 }} />
      </ThemeProvider>
      <Footer />
    </>
  );
};
export default ShoppingBasket;

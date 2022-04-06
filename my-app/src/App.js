import { Outlet, Link } from "react-router-dom";
import ResponsiveAppBar from "./components/header/AppBarUnder";
import PrimarySearchAppBar from "./components/header/AppBar";
import themeOptions from "./components/theme";
import { ThemeProvider } from "@emotion/react";
import Footer from "./components/footer/Footer";
import MediaCardTogether from "./components/card/mediaTop/MediaCardTogether";
import CategoryCard from "./components/card/mediaMiddle/CategoryCard";
import CardItem from "./components/card/mediaMiddle/CardItem";
import { Grid, Container } from "@mui/material";
import "./App.css";
// Or Create your Own theme:
const cards = [1, 2, 3, 4, 5, 6, 7, 8];
const cards2 = [9, 10, 11, 12, 13, 14, 15, 16];
export default function App() {
  console.log("App rendered");
  return (
    <ThemeProvider theme={themeOptions}>
      <div>
        <PrimarySearchAppBar></PrimarySearchAppBar>
        <ResponsiveAppBar></ResponsiveAppBar>
        <nav
          style={{
            borderBottom: "solid 1px",
            paddingBottom: "1rem",
          }}
        >
          <Link to="/invoices">Invoices</Link> |{" "}
          <Link to="/expenses">Expenses</Link>
        </nav>
        <Outlet />
        <MediaCardTogether></MediaCardTogether>

        <h2 className="h2Center">Our Furn</h2>
        <Container maxWidth="lg" height="400">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={3}>
                <CategoryCard></CategoryCard>
              </Grid>
            ))}
            ;
          </Grid>
        </Container>
        <h2 className="h2Center">Promotions</h2>
        <Container maxWidth="lg" height="400">
          <Grid container spacing={4}>
            {cards2.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={3}>
                <CardItem></CardItem>
              </Grid>
            ))}
            ;
          </Grid>
        </Container>
      </div>
      <Footer />
    </ThemeProvider>
  );
}

import ResponsiveAppBar from "./components/header/AppBarUnder";
import PrimarySearchAppBar from "./components/header/AppBar";
import themeOptions from "./components/theme";
import { ThemeProvider } from "@emotion/react";
import Footer from "./components/footer/Footer";
import MediaCardTogether from "./components/card/mediaTop/MediaCardTogether";
import CategoryCardHandler from "./components/card/mediaMiddle/CategoryCardHandler";
import { Card } from "@mui/material";
import MediaCard from "./components/card/mediaTop/MediaCard";
import "./App.css";
import CardHalfTogether from "./components/card/mediaMiddle/CardHalfTogether";
import CardHalfReverse from "./components/card/mediaMiddle/CardHalfReverse";
import CardItemHandler from "./components/card/mediaMiddle/CardItemHandler";
import MediaCardStyled from "./components/card/mediaTop/MediaCardStyled";


// Or Create your Own theme:
const cards = [1, 2, 3, 4, 5, 6, 7, 8];
const cards2 = [9, 10, 11, 12, 13, 14, 15, 16];
export default function App() {
  console.log("App rendered");
  return (
    <ThemeProvider theme={themeOptions}>
      <PrimarySearchAppBar></PrimarySearchAppBar>
      <ResponsiveAppBar></ResponsiveAppBar>
      
      <MediaCardStyled></MediaCardStyled>

      
      <CategoryCardHandler item={cards}></CategoryCardHandler>
      <CardHalfReverse></CardHalfReverse>
      
      <Card
        sx={{
          bgcolor: "background.paper",
          boxShadow: 1,
          borderRadius: 2,
          p: 2,
          minWidth: 300,
        }}
      >
        <MediaCard myId={4}></MediaCard>
      </Card>
      <CardItemHandler item={cards2}></CardItemHandler>
      <CardHalfTogether></CardHalfTogether>
      <Footer />
    </ThemeProvider>
  );
}

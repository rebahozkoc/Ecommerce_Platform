import { ThemeProvider } from "@mui/material/styles";
import themeOptions from "../components/theme";
import PrimarySearchAppBar from "../components/header/AppBar";
import ResponsiveAppBar from "../components/header/AppBarUnder";
import Footer from "../components/footer/Footer";
import { Box } from "@mui/material";
import CardItemHandler from "../components/card/mediaMiddle/CardItemHandler";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

const cards = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32,
];
const CategoryProduct = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <RecoilRoot>
      <ThemeProvider theme={themeOptions}>
        <PrimarySearchAppBar></PrimarySearchAppBar>
        <ResponsiveAppBar></ResponsiveAppBar>
        <CardItemHandler item={cards}></CardItemHandler>
      </ThemeProvider>
      <Box sx={{ m: 2 }} />
      <Footer />
    </RecoilRoot>
  );
};
export default CategoryProduct;

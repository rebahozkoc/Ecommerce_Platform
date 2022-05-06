import { ThemeProvider } from "@mui/material/styles";
import themeOptions from "../theme";
import PrimarySearchAppBar from "../header/AppBar";
import ResponsiveAppBar from "../header/AppBarUnder";
import Footer from "../footer/Footer";
import { Box } from "@mui/material";
import CardItemHandler from "../card/mediaMiddle/CardItemHandler";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import { useParams, useLocation, useSearchParams } from "react-router-dom";

const cards = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32,
];

const SearchPage = (props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchParam = searchParams.get("search");

  const title = `Search results for ${searchParam}`;
  return (
    <RecoilRoot>
      <ThemeProvider theme={themeOptions}>
        <PrimarySearchAppBar></PrimarySearchAppBar>
        <ResponsiveAppBar></ResponsiveAppBar>
        <CardItemHandler item={cards} title={title}></CardItemHandler>
      </ThemeProvider>
      <Box sx={{ m: 2 }} />
      <Footer />
    </RecoilRoot>
  );
};

export default SearchPage;

import { ThemeProvider } from "@mui/material/styles";
import themeOptions from "../theme";
import PrimarySearchAppBar from "../header/AppBar";
import ResponsiveAppBar from "../header/AppBarUnder";
import Footer from "../footer/Footer";
import { Box } from "@mui/material";
import CardItemHandler from "../card/mediaMiddle/CardItemHandler";
import SearchPageData from "./searchPageData";
import { getDataWithoutAccess } from "../recoils/getterFunctions";

import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import { useParams, useLocation, useSearchParams } from "react-router-dom";


const SearchPage = (props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchParam = searchParams.get("search");

  let data = SearchPageData(searchParam);
  const title = `Search results for ${searchParam}`;

  return (
    <RecoilRoot>
      <ThemeProvider theme={themeOptions}>
        <PrimarySearchAppBar></PrimarySearchAppBar>
        <ResponsiveAppBar></ResponsiveAppBar>
        <CardItemHandler item={data} title={title}></CardItemHandler>
      </ThemeProvider>
      <Box sx={{ m: 2 }} />
      <Footer />
    </RecoilRoot>
  );
};

export default SearchPage;

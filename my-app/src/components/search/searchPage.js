import React, { useEffect, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import themeOptions from "../theme";
import PrimarySearchAppBar from "../header/AppBar";
import ResponsiveAppBar from "../header/AppBarUnder";
import Footer from "../footer/Footer";
import { Box, Typography } from "@mui/material";
import CardItemHandler from "../card/mediaMiddle/CardItemHandler";

import { RecoilRoot } from "recoil";
import { useSearchParams } from "react-router-dom";
import { getData } from "../recoils/getterFunctions";

const SearchPage = (props) => {
  const [searchParams] = useSearchParams();
  const searchParam = searchParams.get("search");

  const [dynamicData, setDynamicData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    getData(`http://164.92.208.145/api/v1/categories/${searchParam}`).then(
      (res) => {
        setDynamicData(res.data.products);
        setIsLoaded(true);
      }
    );
  }, [isLoaded, searchParam]);

  const title = `Search results for ${searchParam}`;

  return (
    <RecoilRoot>
      <ThemeProvider theme={themeOptions}>
        <PrimarySearchAppBar></PrimarySearchAppBar>
        <ResponsiveAppBar></ResponsiveAppBar>
        {isLoaded ? (
          <CardItemHandler item={dynamicData} title={title}></CardItemHandler>
        ) : (
          <Box sx={{ height: 300, mt:10 }} justifyContent="center" >
            <Typography variant="h4" align="center">
              There are no results for <b>{searchParam}</b>
            </Typography>
          </Box>
        )}
      </ThemeProvider>
      <Box sx={{ m: 2 }} />
      <Footer />
    </RecoilRoot>
  );
};

export default SearchPage;

import React, { useEffect, useState } from "react";
import ProfilePageContainer from "./profilePageContainer"
import { ThemeProvider } from "@mui/material/styles";
import themeOptions from "../style/theme";
import PrimarySearchAppBar from "../header/AppBar";
import ResponsiveAppBar from "../header/AppBarUnder";
import Footer from "../footer/Footer";
import { Box, Typography } from "@mui/material";
import CardItemHandler from "../card/mediaMiddle/CardItemHandler";

import { RecoilRoot } from "recoil";
import { useSearchParams } from "react-router-dom";
import { getData } from "../recoils/getterFunctions";

const UpdateFavoritesPage = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [dynamicData, setDynamicData] = useState([]);
    useEffect(() => {
      getData(`http://164.92.208.145/api/v1/products/?query=masa`).then(
        (res) => {
          console.log(res.data);
          setDynamicData(res.data);
          setIsLoaded(true);
        }
      );
    }, [isLoaded]);

    //const favouritesWidget = 
  
    const title = "Favorites";
    console.log(dynamicData);
    console.log(isLoaded);
    return (
        <ProfilePageContainer pageIndex={5}
        widget={isLoaded ? (
          <CardItemHandler item={dynamicData} title={title}></CardItemHandler>
        ) : (
          <Box sx={{ height: 300, mt: 10 }} justifyContent="center">
            <Typography variant="h4" align="center">
              Loading...
            </Typography>
          </Box>
        )}>


        </ProfilePageContainer>
    )
};

export default UpdateFavoritesPage;
            
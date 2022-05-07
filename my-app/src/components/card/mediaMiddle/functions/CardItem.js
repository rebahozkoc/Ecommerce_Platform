import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Rating from "@mui/material/Rating";
import CardActions from "@mui/material/CardActions";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";

import themeOptions from "../../../theme";
import { ThemeProvider } from "@emotion/react";
import { Box, CssBaseline, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { loggedState } from "../../../recoils/atoms";
import { useRecoilValue } from "recoil";

import { addCardtoCookie } from "../../../recoils/getterFunctions";
const CardItem = (props) => {
  const [expanded, setExpanded] = React.useState(false);
  const isLogged = useRecoilValue(loggedState);
  const addBasket = (proId) => {
    if (isLogged) {
      console.log("Post proId to shopping cart endpoint");
    } else {
      addCardtoCookie(proId);
    }
  };
  const addFavourite = () => {
    console.log("added to favourite");
  };
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const ratingChanged = () => {
    console.log("hello");
  };

  return (
    <ThemeProvider theme={themeOptions}>
      <CssBaseline></CssBaseline>
      <Card sx={{ maxWidth: 400 }}>
        <Link
          to={`/product/${props.title}`}
          underline="none"
          state={{ id: props.productId }}
          style={{
            textDecoration: "none",
            color: "black",
          }}
        >


          <CardMedia
            component="img"
            height="194"
            image={props.imageId}
            alt="Voidture not Found"
          />

          <CardHeader
            sx={{pb:2, pt:1}}
            style={{textAlign: "center"}}
            title={props.title}
            //subheader="Until when promotion continues"
          />
        </Link>

        <Stack spacing={{ xs: 0, sm: 0, md: 0 }} sx={{ paddingBottom: 0 }}>
          <Stack
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
            sx={{ height: "30px", ml:1, pb: 2}}
          >
            <Typography
              variant="body2"
              color="text.secondary"
              fontWeight="bold"
            >
              {props.cost}
            </Typography>
            <CardActions>
              <IconButton
                aria-label="share"
                onClick={() => {
                  addBasket(props.productId);
                }}
              >
                <ShoppingBasketOutlinedIcon />
              </IconButton>
            </CardActions>
            <CardActions>
              <IconButton aria-label="add to favorites" onClick={addFavourite}>
                <FavoriteIcon />
              </IconButton>
            </CardActions>
          </Stack>
        </Stack>
      </Card>
    </ThemeProvider>
  );
};
export default CardItem;

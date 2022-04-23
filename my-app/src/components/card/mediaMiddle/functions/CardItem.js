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
import CommentIcon from "@mui/icons-material/Comment";
import themeOptions from "../../../theme";
import { ThemeProvider } from "@emotion/react";
import { Box, Stack } from "@mui/material";
import { Link } from "react-router-dom";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const CardItem = (props) => {
  const [expanded, setExpanded] = React.useState(false);
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
      <Card sx={{ maxWidth: 400 }}>
        <CardHeader
          title="item title not necessary deletable"
          subheader="Until when promotion continues"
        />
        <Link to="/product" underline="none">
          <CardMedia
            component="img"
            height="194"
            image={props.imageId}
            alt="Voidture not Found"
          />
        </Link>
        <Stack spacing={{ xs: 0, sm: 0, md: 0 }} sx={{ paddingBottom: 0 }}>
          <Stack
            direction="row"
            justifyContent="space-evenly"
            spacing={2}
            sx={{ height: "30px" }}
          >
            <Typography variant="body2" color="text.secondary">
              Item title
            </Typography>
            <IconButton aria-label="add to favorites" onClick={addFavourite}>
              <FavoriteIcon />
            </IconButton>
          </Stack>

          <Stack
            direction="row"
            justifyContent="space-evenly"
            spacing={2}
            sx={{ height: "30px" }}
          >
            <Typography
              variant="body2"
              color="text.secondary"
              fontWeight="bold"
            >
              {props.cost}
            </Typography>
            <CardActions>
              <IconButton aria-label="share">
                <ShoppingBasketOutlinedIcon />
              </IconButton>
            </CardActions>
          </Stack>

          <Stack
            direction="row"
            justifyContent="space-evenly"
            spacing={2}
            sx={{ height: "30px" }}
          >
            <CardActions>
              <Rating name="read-only" value={3} readOnly />

              <IconButton aria-label="share">
                <CommentIcon />
              </IconButton>
            </CardActions>
          </Stack>
        </Stack>
      </Card>
    </ThemeProvider>
  );
};
export default CardItem;

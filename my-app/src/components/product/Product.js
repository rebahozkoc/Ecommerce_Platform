import React from "react";
import ReactDOM from "react-dom";
import {
  Container,
  Typography,
  Box,
  List,
  ListItem,
  Divider,
  Grid,
  Card,
  Stack,
  Button,
} from "@mui/material";
import PrimarySearchAppBar from "../header/AppBar";
import ResponsiveAppBar from "../header/AppBarUnder";
import Footer from "../footer/Footer";
import themeOptions from "../theme";
import { ThemeProvider } from "@emotion/react";
import CommentCard from "./Comment/Comment";
import { CssBaseline } from "@mui/material/";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import Ratings from "./Comment/Ratings";
import Images from "./Item/Images";
import Description from "./Item/Description";
import NewReview from "./Comment/NewReview";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import { useParams, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { getDataWithoutAccess } from "../recoils/getterFunctions";
import NewRating from "./Comment/NewRating";
import axios from "axios";
import { getCookie } from "../recoils/atoms";

const access = getCookie("access_token");

let points = [0, 0, 0, 0, 0, 0, 0];

const Product = () => {
  const [makeComment, setMakeComment] = React.useState(false);
  const [makeRating, setMakeRating] = React.useState(false);
  const { type } = useParams();
  const stateParamValue = useLocation();

  //const productId = stateParamValue.state.id;
  const productId = 4;

  const [isLoaded, setLoaded] = useState(false);
  const [itemTemp, setProduct] = useState([]);
  useEffect(() => {
    getDataWithoutAccess(
      `http://164.92.208.145/api/v1/products/${productId}`
    ).then((res) => {
      //console.log(res.data);
      setProduct(res.data);
      setLoaded(true);
    });
  }, []);

  const [isLoaded2, setLoaded2] = useState(false);
  const [comments, setComments] = useState([]);
  useEffect(() => {
    getDataWithoutAccess(
      `http://164.92.208.145/api/v1/products/${productId}/comments`
    ).then((res) => {
      //console.log(res.data);
      setComments(res.data);
      setLoaded2(true);
    });
  }, []);

  //console.log("product id is", itemTemp);
  const clickHandler = () => {
    setMakeComment(true);
  };

  const clickHandler2 = () => {
    setMakeRating(true);
  };
  const closeComment = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const newComment = data.get("comment");
    console.log(newComment);
    axios.post(
      `http://164.92.208.145/api/v1/products/${productId}/comment`,
      {
        content: newComment,
      },
      {
        headers: {
          Accept: "*/*",
          Authorization: `Bearer ${access}`,
        },
      }
    );
    setMakeComment(false);
  };
  const cancelComment = () => {
    setMakeComment(false);
  };
  const ratingCancel = () => {
    setMakeRating(false);
  };
  const ratingPost = (value) => {
    let bodyContent = JSON.stringify({
      rate: Number(value),
    });
    axios
      .post(
        `http://164.92.208.145/api/v1/products/${productId}/rate?rate=${value}`,
        bodyContent,
        {
          headers: {
            Accept: "*/*",
            Authorization: `Bearer ${access}`,
          },
        }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
    setMakeRating(false);
  };

  const commentDeleter = (deleteId) => {
    console.log("comment to delete is", deleteId);
    axios.delete(
      `http://164.92.208.145/api/v1/products/${productId}/comments/${deleteId}`,
      {
        headers: {
          Accept: "*/*",
          Authorization: `Bearer ${access}`,
        },
      }
    );
  };
  const comment = () => {
    points[0] = 0;
    points[1] = 0;
    points[2] = 0;
    points[3] = 0;
    points[4] = 0;
    points[5] = 0;
    points[6] = 0;
    comments.map((card) => {
      points[card.id - 1]++;
      points[5]++;
      points[6] += card.id;
    });
  };
  comment();
  React.useEffect(() => {
    comment();
    //console.log(points[5]);
  }, [makeComment]);

  const [change, setChange] = React.useState(false);

  const incCard = () => {
    if (itemTemp.count < itemTemp.stock) {
      setChange(true);
      itemTemp.count++;
    }
  };
  const decCard = () => {
    if (itemTemp.count > 0) {
      setChange(true);
      itemTemp.count--;
    }
  };

  React.useEffect(() => {
    setChange(false);
  }, [change]);

  return isLoaded && isLoaded2 ? (
    <RecoilRoot>
      <ThemeProvider theme={themeOptions}>
        <CssBaseline />
        <PrimarySearchAppBar></PrimarySearchAppBar>
        <ResponsiveAppBar></ResponsiveAppBar>

        <Stack
          spacing={3}
          display="flex"
          direction="row"
          sx={{ padding: (3, 3, 3, 3), backgroundColor: "white" }}
        >
          <Images images={itemTemp.photos}></Images>
          <Description
            description={itemTemp.description}
            title={`${itemTemp.category_title} \\ ${itemTemp.subcategory_title} \\ ${itemTemp.title}`}
            cost={itemTemp.price}
            id={itemTemp.id}
            stock={itemTemp.stock}
            count={itemTemp.count}
            dec={decCard}
            inc={incCard}
            model={itemTemp.model}
          ></Description>
        </Stack>

        <Divider />
        <Box sx={{ m: 1 }} />
        <Container maxWidth="none" sx={{ backgroundColor: "white" }}>
          <Grid container spacing={2}>
            <Grid item key={2} xs={2}>
              <Ratings
                points={points}
                clickHandler={clickHandler}
                ratingHandler={clickHandler2}
              ></Ratings>
            </Grid>

            <Grid item key={1} xs={9}>
              <Box
                sx={{
                  padding: (2, 2, 2, 2),
                  backgroundColor: "white",
                }}
              >
                <List>
                  {comments.map((card) => (
                    <ListItem key={card.id}>
                      <CommentCard
                        name={"username"}
                        comment={card.content}
                        topic={"title"}
                        id={card.id}
                        productId={productId}
                        deleteComment={commentDeleter}
                      ></CommentCard>
                    </ListItem>
                  ))}
                </List>
                <Divider sx={{ size: 100 }} />
                <Link to="/" style={{ color: "black" }}>
                  <Typography sx={{ color: "black" }}>
                    {" "}
                    <ArrowBackIosOutlinedIcon />
                    Back to Shopping
                  </Typography>
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Container>
        <Box sx={{ m: 2 }} />
        {makeComment && (
          <NewReview
            onConfirm={closeComment}
            onCancel={cancelComment}
          ></NewReview>
        )}

        {makeRating && (
          <NewRating onRating={ratingPost} onCancel={ratingCancel}></NewRating>
        )}
      </ThemeProvider>
      <Footer />
    </RecoilRoot>
  ) : (
    <div>"Loading..."</div>
  );
};
export default Product;

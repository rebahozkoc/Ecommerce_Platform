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

import { getCookie, loggedState } from "../recoils/atoms";

import { getData } from "../recoils/getterFunctions";
import { addCardtoCookie } from "../recoils/getterFunctions";

const access = getCookie("access_token");

let points = [0, 0, 0, 0, 0, 0, 0];
let count = 0;
const Product = () => {
  const isLogged = useRecoilValue(loggedState);
  const [products, setProducts] = useState([]);
  const [isLoaded3, setLoaded3] = useState(false);
  const [checker, setChecker] = useState(true);
  const isIn = (item) => {
    for (let i = 0; i < products.length; i++) {
      if (item == products[i].product.id) {
        if (products[i].product.stock <= products[i].quantity) {
          return products[i].product.stock - 1;
        }
        products[i].quantity += count;
        return products[i].quantity;
      }
    }
    return 0;
  };

  useEffect(() => {
    if (isLogged) {
      getData(`http://164.92.208.145/api/v1/users/shopping_cart`)
        .then((res) => {
          //console.log(res.data);
          setProducts(res.data);
          setLoaded3(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);
  const addBasket = (proId) => {
    if (isLogged) {
      console.log("helloooo");
      console.log(isLoaded3, checker);
      if (isLoaded3 && checker) {
        setChecker(false);
        console.log("Post proId to shopping cart endpoint");
        let num = isIn(proId, products);
        if (num > 0) {
          //update
          console.log("update", proId);
          let bodyContent = JSON.stringify({
            product_id: Number(proId),
            quantity: count + Number(num),
            created_at: "2022-05-07T09:09:00.438084",
          });
          axios
            .patch(
              "http://164.92.208.145/api/v1/users/shopping_cart/",
              bodyContent,
              {
                headers: {
                  Accept: "*/*",
                  Authorization: `Bearer ${access}`,
                  "Content-Type": "application/json",
                },
              }
            )
            .catch((res) => {
              console.log(res);
            })
            .then((err) => {
              console.log(err);
            });
        } else {
          //post
          console.log("new item", Number(proId));

          let bodyContent = JSON.stringify({
            product_id: Number(proId),
            quantity: count,
            created_at: "2022-05-07T09:09:00.438084",
          });
          axios
            .post(
              "http://164.92.208.145/api/v1/users/shopping_cart/",
              bodyContent,
              {
                headers: {
                  Accept: "*/*",
                  Authorization: `Bearer ${access}`,
                  "Content-Type": "application/json",
                },
              }
            )
            .catch((res) => {
              console.log(res);
            })
            .then((err) => {
              console.log(err);
            });
        }
      }
    } else {
      console.log("from cart", proId);
      addCardtoCookie(proId);
      console.log(getCookie("orderList"));
    }
  };

  const [makeComment, setMakeComment] = React.useState(false);
  const [makeRating, setMakeRating] = React.useState(false);
  const { type } = useParams();
  const stateParamValue = useLocation();

  const productId = stateParamValue.state.id;
  //const productId = 4;

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
    if (count < itemTemp.stock) {
      setChange(true);
      count++;
    }
  };
  const decCard = () => {
    if (count > 1) {
      setChange(true);
      count--;
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
            count={count}
            dec={decCard}
            inc={incCard}
            model={itemTemp.model}
            clickHandler={() => {
              setChecker(true);
              addBasket(itemTemp.id);
            }}
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
                  <Stack direction="row" sx={{mt:2}}>
                  <ArrowBackIosOutlinedIcon />
                  <Typography sx={{ color: "black" }}>
                    {" "}
                    
                    Back to Shopping
                  </Typography>
                  </Stack>
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

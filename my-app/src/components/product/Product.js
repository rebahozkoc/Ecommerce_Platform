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
let productId = 1;
let points = [0, 0, 0, 0, 0, 0, 0];
let comments = [
  {
    id: 1,
    name: "Gorkem",
    date: "date",
    comment:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    rating: 4,
    topic: "Little Lorem İpsum",
  },
  {
    id: 2,
    name: "Rebah",
    date: "date",
    comment:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    rating: 4,
    topic: "Little Lorem İpsum",
  },
  {
    id: 3,
    name: "Furkan",
    date: "date",
    comment:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    rating: 3,
    topic: "Little Lorem İpsum",
  },
  {
    id: 4,
    name: "Albert",
    date: "date",
    comment:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    rating: 5,
    topic: "Little Lorem İpsum",
  },
  {
    id: 5,
    name: "Selim",
    date: "date",
    comment:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    rating: 1,
    topic: "Little Lorem İpsum",
  },
  {
    id: 6,
    name: "Yasin",
    date: "date",
    comment:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    rating: 4,
    topic: "Little Lorem İpsum",
  },
];

let itemTemp = {
  count: 0,
  stock: 5,
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet tellus cras adipiscing enim eu. Id eu nisl nunc mi ipsum faucibus vitae aliquet. Penatibus et magnis dis parturient. Commodo ullamcorper a lacus vestibulum sed arcu. Aliquam vestibulum morbi blandit cursus risus. Nibh praesent tristique magna sit amet purus gravida quis blandit. Varius vel pharetra vel turpis. Eu nisl nunc mi ipsum.",
  title: "Furniture Name",
  cost: 100,
  time: "10/10/2022",
};

const Product = () => {
  const [makeComment, setMakeComment] = React.useState(false);
  const { type } = useParams();
  const stateParamValue = useLocation();
  console.log(stateParamValue);
  const clickHandler = () => {
    setMakeComment(true);
  };
  const closeComment = () => {
    setMakeComment(false);
  };
  const cancelComment = () => {
    setMakeComment(false);
  };

  const commentDeleter = (deleteId) => {
    console.log("comment to delete is", deleteId);
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
      points[card.rating - 1]++;
      points[5]++;
      points[6] += card.rating;
    });
  };
  comment();
  React.useEffect(() => {
    comment();
    console.log(points[5]);
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

  return (
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
          <Images></Images>
          <Description
            description={itemTemp.description}
            title={itemTemp.title}
            cost={itemTemp.cost}
            id={itemTemp.title}
            stock={itemTemp.stock}
            count={itemTemp.count}
            dec={decCard}
            inc={incCard}
            time={itemTemp.time}
          ></Description>
        </Stack>

        <Divider />
        <Box sx={{ m: 1 }} />
        <Container maxWidth="none" sx={{ backgroundColor: "white" }}>
          <Grid container spacing={2}>
            <Grid item key={2} xs={2}>
              <Ratings points={points} clickHandler={clickHandler}></Ratings>
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
                        name={card.name}
                        rating={card.rating}
                        comment={card.comment}
                        topic={card.topic}
                        date={card.date}
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
      </ThemeProvider>
      <Footer />
    </RecoilRoot>
  );
};
export default Product;

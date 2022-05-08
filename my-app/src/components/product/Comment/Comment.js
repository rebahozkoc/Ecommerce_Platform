import * as React from "react";
import { styled } from "@mui/material/styles";
import DeleteIcon from "@mui/icons-material/Delete";
import Typography from "@mui/material/Typography";
import themeOptions from "../../theme";
import { ThemeProvider } from "@emotion/react";
import { Box, Stack, Divider, Button } from "@mui/material";
import { Rating } from "@mui/material";
import { Link } from "react-router-dom";
import { nameState } from "../../recoils/atoms";
import { useRecoilValue } from "recoil";
import DoneIcon from "@mui/icons-material/Done";
/*
<Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                  />


        <Stack direction="row" spacing={2} sx={{ height: "60px" }}>
          <Stack direction="column">
            <Typography variant="body1">{props.title}</Typography>
            <Divider />
            <Typography variant="body2">{props.description}</Typography>
            <Box sx={{ m: 2 }} />
            <Typography
              variant="body2"
              color="text.secondary"
              fontWeight="bold"
            >
              Price: {props.cost}$
            </Typography>
          </Stack>
          <Stack direction="column">
            <Typography
              variant="body1"
              color="text.secondary"
              fontWeight="bold"
            >
              Delivery Time
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
              fontWeight="bold"
            >
              some date time
            </Typography>
          </Stack>
          <Box sx={{ m: 2 }} />
          <Stack direction="column">
            <Box sx={{ m: 1 }} />
            <Typography
              variant="body2"
              color="text.secondary"
              fontWeight="bold"
            >
              {" "}
              Item Count
            </Typography>
            <Stack
              direction="row"
              maxHeight="30px"
              sx={{
                border: 2,
                borderColor: "black",
              }}
            >
              <CardActions>
                <IconButton aria-label="share" onClick={decreaser}>
                  <RemoveIcon />
                </IconButton>
              </CardActions>
              <Box sx={{ borderLeft: 2 }}></Box>
              <Box sx={{ m: 1 }} />
              <Typography
                variant="body2"
                color="text.secondary"
                fontWeight="bold"
              >
                {props.count}
              </Typography>
              <Box sx={{ m: 1 }} />
              <Box sx={{ borderRight: 2 }}></Box>
              <CardActions>
                <IconButton aria-label="share" onClick={increaser}>
                  <AddIcon />
                </IconButton>
              </CardActions>
            </Stack>
            {notZero && (
              <Typography
                variant="body2"
                color="text.secondary"
                fontWeight="bold"
                color="red"
              >
                *You can not go below 0!
              </Typography>
            )}
            {outStock && (
              <Typography
                variant="body2"
                color="text.secondary"
                fontWeight="bold"
                color="red"
              >
                *Stock Limit
              </Typography>
            )}
          </Stack>
          <Box sx={{ m: 1 }} />
          <Stack direction="column">
            <Typography
              variant="body1"
              color="text.secondary"
              fontWeight="bold"
            >
              Total Price
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ fontSize: 12 }}
            >
              {(props.cost * props.count).toFixed(2)}
            </Typography>
          </Stack>

          <CardActions>
            <IconButton aria-label="share" onClick={removeHandler}>
              <DeleteOutlinedIcon />
            </IconButton>
          </CardActions>
        </Stack>
        <Box sx={{ m: 8 }} />
        */
const CommentCard = (props) => {
  const [expanded, setExpanded] = React.useState(false);
  const [outStock, setoutStock] = React.useState(false);
  const [notZero, setnotzero] = React.useState(false);
  const [openComment, setOpenComment] = React.useState(false);
  const [buttonComment, setButtonComment] = React.useState(false);

  const removeHandler = () => {
    props.delete(props.id);
  };

  const adminState = useRecoilValue(nameState);
  //console.log(document.cookie);
  const openAllComment = () => {
    setOpenComment(true);
  };

  const closeAllComment = () => {
    setOpenComment(false);
  };
  const [isButton, setIsButton] = React.useState(false);
  let myComment = props.comment;
  if (props.comment.length > 300) {
    setIsButton(true);
    myComment = props.comment.substr(0, 300);
  }

  React.useEffect(() => {}, [outStock, notZero, openComment]);

  return (
    <ThemeProvider theme={themeOptions}>
      <Stack direction="row">
        <Box disableRipple sx={{ width: 800 }}>
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="right"
            display="flex"
          >
            <Stack display="flex" direction="row" spacing={3}>
              <Typography
                variant="body1"
                component="legend"
                fontWeight="bold"
                fontSize={15}
              >
                {props.name}
              </Typography>
              <Rating name="read-only" value={props.topic} readOnly />
            </Stack>
            <Typography component="legend" align="left" fontSize={12}>
              {!openComment && myComment}
              {openComment && props.comment}
              {!openComment && isButton && (
                <Button onClick={openAllComment}>...</Button>
              )}
              {openComment && isButton && (
                <Button onClick={closeAllComment}>...</Button>
              )}
            </Typography>
            <Box sx={{ m: 1 }}></Box>
          </Stack>

          <Divider />
        </Box>
        {adminState && (
          <>
            <Button
              onClick={() => {
                props.ApproveComment(props.id);
              }}
            >
              <DoneIcon></DoneIcon>
            </Button>
            <Button
              onClick={() => {
                props.deleteComment(props.id);
              }}
            >
              <DeleteIcon></DeleteIcon>
            </Button>
          </>
        )}
      </Stack>
    </ThemeProvider>
  );
};
export default CommentCard;

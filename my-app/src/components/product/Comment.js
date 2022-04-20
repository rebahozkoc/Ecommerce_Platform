import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import themeOptions from "../theme";
import { ThemeProvider } from "@emotion/react";
import { Box, Stack, Divider, Button } from "@mui/material";
import { Link } from "react-router-dom";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
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

const CommentCard = (props) => {
  const [expanded, setExpanded] = React.useState(false);
  const [outStock, setoutStock] = React.useState(false);
  const [notZero, setnotzero] = React.useState(false);
  const removeHandler = () => {
    props.delete(props.id);
  };

  const decreaser = () => {
    props.dec(props.id);
    setoutStock(false);
    if (props.count == 0) {
      setnotzero(true);
    }
  };
  const increaser = () => {
    props.inc(props.id);
    setnotzero(false);
    if (props.count == props.stock) {
      setoutStock(true);
    }
  };

  React.useEffect(() => {
    console.log("");
  }, [outStock, notZero]);
  return (
    <ThemeProvider theme={themeOptions}>
      <Box disableRipple sx={{ width: 800 }}>
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

        <Divider />
      </Box>
    </ThemeProvider>
  );
};
export default CommentCard;

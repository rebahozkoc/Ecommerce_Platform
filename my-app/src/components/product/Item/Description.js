import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import themeOptions from "../../theme";
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

const Description = (props) => {
  const [expanded, setExpanded] = React.useState(false);
  const [outStock, setoutStock] = React.useState(false);
  const [notZero, setnotzero] = React.useState(false);
  const removeHandler = () => {
    props.delete(props.id);
  };

  const decreaser = () => {
    props.dec();
    setoutStock(false);
    if (props.count === 0) {
      setnotzero(true);
    }
  };
  const increaser = () => {
    props.inc();
    setnotzero(false);
    if (props.count === props.stock) {
      setoutStock(true);
    }
  };

  React.useEffect(() => {
    console.log("");
  }, [outStock, notZero]);
  return (
    <ThemeProvider theme={themeOptions}>
      <Box
        disableRipple
        sx={{ width: 800, backgroundColor: "white", padding: (1, 1, 1, 1) }}
      >
        <Stack direction="column" spacing={2} sx={{ height: "60px" }}>
          <Stack direction="column" spacing={1}>
            <Typography variant="body1">{props.title}</Typography>
            <Divider />
            <Typography variant="body2">{props.description}</Typography>
            <Box sx={{ m: 2 }} />
            <Typography
              variant="body1"
              color="text.secondary"
              fontWeight="bold"
            >
              Stock Availability: {props.stock}
            </Typography>
          </Stack>

          <Typography variant="body1" color="text.secondary" fontWeight="bold">
            Delivery Time: {props.time}
          </Typography>

          <Stack direction="column" spacing={1}>
            <Typography
              variant="body1"
              color="text.secondary"
              fontWeight="bold"
            >
              Item Count
            </Typography>
            <Stack
              direction="row"
              maxWidth="170px"
              alignItems="center"
              justifyContent="space-between"
              sx={{
                border: 2,
                borderColor: "black",
                borderRadius: 6,
                p:0,
                m:0
              }}
            >
              <CardActions>
                <IconButton aria-label="share" onClick={decreaser}>
                  <RemoveIcon />
                </IconButton>
              </CardActions>
              <Divider orientation="vertical" flexItem sx={{width:2, bgcolor:themeOptions.palette.black.main}} />

              <Stack direction="column">
                
                <Typography
                  variant="body2"
                  color="text.secondary"
                  fontWeight="bold"
                  sx={{
                    p:2,
                  }}
                >
                  {props.count}
                </Typography>
              </Stack>
              <Divider orientation="vertical" flexItem sx={{width:2, bgcolor:themeOptions.palette.black.main}} />
              <CardActions>
                <IconButton aria-label="share" onClick={increaser}>
                  <AddIcon />
                </IconButton>
              </CardActions>
            </Stack>
            {notZero && (
              <Typography variant="body2" fontWeight="bold" color="red">
                *You can not go below 0!
              </Typography>
            )}
            {outStock && (
              <Typography variant="body2" fontWeight="bold" color="red">
                *Stock Limit
              </Typography>
            )}
          </Stack>
          <Box sx={{ m: 1 }} />

          <Typography variant="body1" color="text.secondary" fontWeight="bold">
            Total Price {(props.cost * props.count).toFixed(2)}$
          </Typography>
          <CardActions>
            <Button
              onClick={props.clickHandler}
              variant="contained"
              sx={{
                backgroundColor: "#ff6600",
                display: "block",
                padding: (8, 1, 8, 1),
                justify: "center",
              }}
            >
              <Typography sx={{ color: "black" }}>Add to Basket</Typography>
            </Button>
          </CardActions>
        </Stack>
      </Box>
    </ThemeProvider>
  );
};
export default Description;

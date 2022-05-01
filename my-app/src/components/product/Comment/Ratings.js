import React from "react";
import ReactDOM from "react-dom";
import { Typography, Box, Stack, Button } from "@mui/material";

import Rating from "@mui/material/Rating";

const Ratings = (props) => {
 
  console.log(Number(props.points[6]) / Number(props.points[5]));
  return (
    <Box
      sx={{
        backgroundColor: "white",
        overflow: "auto",
      }}
    >
      <Box
        sx={{
          "& > legend": { mt: 2 },
          margin: (0, 0, 0, 0),
        }}
      >
        <Typography
          component="legend"
          align="left"
          fontSize={20}
          fontWeight="bold"
          padding={(2, 2, 2, 2)}
        >
          Customer Reviews
        </Typography>
        <Stack
          spacing={0}
          justifyContent="center"
          alignItems="center"
          display="flex"
          direction="row"
          sx={{ padding: (1, 1, 1, 1) }}
        >
          <Typography
            component="legend"
            align="left"
            fontSize={10}
            padding={(2, 2, 2, 2)}
          >
            {props.points[5]} Reviews
          </Typography>
          <Rating
            name="read-only"
            value={Number(props.points[6]) / Number(props.points[5])}
            precision={0.1}
            readOnly
          />
        </Stack>

        <Stack
          justifyContent="center"
          alignItems="center"
          display="flex"
          direction="row"
          sx={{ padding: (2, 2, 2, 2) }}
        >
          <Typography component="legend" align="right" fontSize={10}>
            5 Star
          </Typography>
          <Rating name="read-only" value={5} readOnly />
          <Typography component="legend" align="right" fontSize={12}>
            {props.points[4]}
          </Typography>
        </Stack>
        <Stack
          justifyContent="center"
          alignItems="center"
          display="flex"
          direction="row"
          sx={{ padding: (2, 2, 2, 2) }}
        >
          <Typography component="legend" align="right" fontSize={10}>
            4 Star
          </Typography>
          <Rating name="read-only" value={4} readOnly />
          <Typography component="legend" align="right" fontSize={12}>
            {props.points[3]}
          </Typography>
        </Stack>
        <Stack
          justifyContent="center"
          alignItems="center"
          display="flex"
          direction="row"
          sx={{ padding: (2, 2, 2, 2) }}
        >
          <Typography component="legend" align="right" fontSize={10}>
            3 Star
          </Typography>
          <Rating name="read-only" value={3} readOnly />
          <Typography component="legend" align="right" fontSize={12}>
            {props.points[2]}
          </Typography>
        </Stack>
        <Stack
          justifyContent="center"
          alignItems="center"
          display="flex"
          direction="row"
          sx={{ padding: (2, 2, 2, 2) }}
        >
          <Typography component="legend" align="right" fontSize={10}>
            2 Star
          </Typography>
          <Rating name="read-only" value={2} readOnly />
          <Typography component="legend" align="right" fontSize={12}>
            {props.points[1]}
          </Typography>
        </Stack>
        <Stack
          justifyContent="center"
          alignItems="center"
          display="flex"
          direction="row"
          sx={{ padding: (2, 2, 2, 2) }}
        >
          <Typography component="legend" align="right" fontSize={10}>
            1 Star
          </Typography>
          <Rating name="read-only" value={1} readOnly />
          <Typography component="legend" align="right" fontSize={12}>
            {props.points[0]}
          </Typography>
        </Stack>
      </Box>

      <Stack justifyContent="center" alignItems="center">
        <Button
          onClick={props.clickHandler}
          fullWidth
          variant="contained"
          sx={{
            backgroundColor: "#ff6600",
            display: "block",
            padding: (8, 1, 8, 1),
            justify: "center",
          }}
        >
          <Typography sx={{ color: "black" }}>Make a comment</Typography>
        </Button>
      </Stack>
    </Box>
  );
};
export default Ratings;

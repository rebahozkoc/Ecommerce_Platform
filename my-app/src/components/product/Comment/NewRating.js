import React from "react";

import {
  Card,
  Button,
  Typography,
  Stack,
  Grid,
  Rating,
  Box,
  TextField,
} from "@mui/material";
import classes from "../Item/ImagePop.module.css";

const NewRating = (props) => {
  const [value, setValue] = React.useState(0);
  return (
    <div>
      <div className={classes.backdrop} />
      <Card className={classes.modal}>
        <Box sx={{ m: 2 }} />

        <Grid container justifyContent="center">
          <Typography component="legend">Rating</Typography>
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
        </Grid>
        <Box sx={{ m: 2 }} />
        <Stack direction="row">
          <Button
            onClick={props.onCancel}
            variant="contained"
            sx={{
              backgroundColor: "#ff6600",
              display: "block",
              padding: (8, 1, 8, 1),
              justify: "right",
              align: "right",
            }}
          >
            <Typography sx={{ color: "black" }}>Cancel</Typography>
          </Button>
          <Grid container justifyContent="flex-end">
            <Button
              onClick={() => {
                props.onRating(value);
              }}
              variant="contained"
              sx={{
                backgroundColor: "#ff6600",
                display: "block",
                padding: (8, 1, 8, 1),
                justify: "flex-end",
                align: "right",
              }}
            >
              <Typography sx={{ color: "black" }}>Confirm Comment</Typography>
            </Button>
          </Grid>
        </Stack>
      </Card>
    </div>
  );
};

export default NewRating;

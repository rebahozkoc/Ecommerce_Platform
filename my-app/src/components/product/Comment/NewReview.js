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

const NewReview = (props) => {
  const [value, setValue] = React.useState(0);
  return (
    <div>
      <div className={classes.backdrop} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>Comment Section</h2>
        </header>
        <Box sx={{ m: 1 }}></Box>
        <Grid container justifyContent="center">
          <Typography component="legend">Rating</Typography>
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />

          <TextField
            id="outlined-uncontrolled"
            label="Comment"
            multiline
            minRows={5}
            fullWidth
            sx={{ padding: (1, 1, 1, 1) }}
          />
        </Grid>
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
              onClick={props.onConfirm}
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

export default NewReview;

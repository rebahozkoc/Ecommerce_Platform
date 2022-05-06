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
        <Box sx={{ m: 1 }} />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          component="form"
          onSubmit={props.onConfirm}
          noValidate
        >
          <Grid container justifyContent="center">
            <TextField
              id="comment"
              label="Comment"
              name="comment"
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
              }}
            >
              <Typography sx={{ color: "black" }}>Cancel</Typography>
            </Button>
            <Box sx={{ m: 1 }} />
            <Button
              type="submit"
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
          </Stack>
        </Box>
      </Card>
    </div>
  );
};

export default NewReview;

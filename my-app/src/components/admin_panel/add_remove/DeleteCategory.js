import * as React from "react";
import Link from "@mui/material/Link";
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
import AdminPanelContainer from "../AdminPanel";
import { useState } from "react";
import axios from "axios";
import { getCookie } from "../../recoils/atoms";

const access = getCookie("access_token");
const DeleteCategories = (props) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [value, setValue] = React.useState(3);
  const addNewCategory = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const newCat = data.get("catName");
    //console.log(newComment);
    axios
      .post(
        `http://164.92.208.145/api/v1/products/${props.id}/comment`,
        {
          content: newCat,
          rate: value,
        },
        {
          headers: {
            Accept: "*/*",
            Authorization: `Bearer ${access}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
        console.log(newCat);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const deleteCategoryWidget = (
    <Card>
      <Box sx={{ m: 2 }} />
      <Typography sx={{ fontSize: 20 }} pl={2}>
        Delete Category
      </Typography>
      <Box sx={{ m: 2 }} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        component="form"
        onSubmit={addNewCategory}
        noValidate
      >
        <Grid container justifyContent="center">
          <TextField
            id="catName"
            label="Enter the Category Name to be Deleted"
            name="catName"
            fullWidth
            sx={{ padding: (1, 1, 1, 1) }}
          />
        </Grid>

        <Box
          m={1}
          //margin
          display="flex"
          justifyContent="flex-end"
          alignItems="flex-end"
        >
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
            <Typography sx={{ color: "black" }}>Delete Category</Typography>
          </Button>
        </Box>
      </Box>
    </Card>
  );

  return (
    <AdminPanelContainer
      pageIndex={1}
      widget={deleteCategoryWidget}
    ></AdminPanelContainer>
  );
};

export default DeleteCategories;

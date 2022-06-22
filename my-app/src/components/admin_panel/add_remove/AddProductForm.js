import Input from '@mui/material/Input';

import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Box, Button } from "@mui/material";
import themeOptions from "../../style/theme";
import { getCookie } from "../../recoils/atoms";
import axios from "axios";
const access = getCookie("access_token");

let headersList = {
  Authorization: `Bearer ${access}`,
  "Content-Type": "application/json",
};
console.log(access);
const AddProductForm = (props) => {
  const handleSubmit = (event) => {
    console.log("Input data", event);
    const data2 = new FormData(event.currentTarget);
    console.log("Input data", data2);

    let bodyContent = JSON.stringify({
      title: data2.get("title"),
      description: data2.get("description"),
      distributor: "Voidture Inc.",
      stock: data2.get("stock"),
      price: data2.get("price"),
      model: props.categoryName,
      number: props.subcategoryName,
      category_id: props.categoryId,
      subcategory_id: props.subcategoryId,
    });

    axios
      .post("http://164.92.208.145/api/v1/products", bodyContent, {
        headers: headersList,
      })
      .then((response) => {
        console.log("response", response);
    })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <React.Fragment>
      <Box
        component="form"
        onSubmit={handleSubmit}
        noValidate
        sx={{ maxWidth: 750, p: 4 }}
      >
        <TextField
          required
          id="title"
          name="title"
          label="Product Title"
          //defaultValue={data ? data["title"] : ""}
          fullWidth
          autoComplete="title"
          variant="standard"
        />
        <br></br>
        <br></br>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="stock"
              name="stock"
              label="Stock Count"
              fullWidth
              variant="standard"
              type="number"

            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="price"
              name="price"
              label="Price"
              fullWidth
              autoComplete="price"
              variant="standard"
              type="number"

            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              required
              id="description"
              name="description"
              label="Description"
              minRows={2}
              fullWidth
              multiline
              
              variant="standard"
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              sx={{ bgcolor: themeOptions.palette.primary.light }}
              type="submit"
            >
              <Typography
                variant="button"
                sx={{ color: themeOptions.palette.black.main }}
              >
                Save
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
};


export default AddProductForm;
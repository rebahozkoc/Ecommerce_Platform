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
import { useState, useEffect, useCallback } from "react";

import AdminPanelContainer from "../AdminPanel";
import axios from "axios";
import { getCookie } from "../../recoils/atoms";
import AddProductDropDown from "./AddProductDropDown";

const access = getCookie("access_token");
const AddProduct = (props) => {
  // Get categories to add product
  const [categoryList, setDataCategory] = useState([]);
  const [isLoadedCategory, setIsLoadedCategory] = useState(false);
  const [categoryId, setCategoryId] = useState(1);

  const getDataCategory = async () => {
    //const { data } = await axios.get("http://localhost:8000/customMockData/1");

    const { data } = await axios({
      method: "get",
      url: "http://164.92.208.145/api/v1/categories/?skip=0&limit=100",
      withCredentials: false,
    });

    setDataCategory(data.data);
    console.log(data.data);
    setIsLoadedCategory(true);
  };

  useEffect(() => {
    getDataCategory(categoryId);

    
  }, [categoryId]);


  const [subcategoryList, setDataSubcategory] = useState([]);
  const [isLoadedSubcategory, setIsLoadedSubcategory] = useState(false);

  const getDataSubcategory = async (categoryId) => {
    //const { data } = await axios.get("http://localhost:8000/customMockData/1");

    const { data } = await axios({
      method: "get",
      url: `http://164.92.208.145/api/v1/categories/${categoryId}`,
      withCredentials: false,
    });

    setDataSubcategory(data.data);
    console.log(data.data);
    setIsLoadedSubcategory(true);
  };

  useEffect(() => {
    getDataSubcategory(categoryId);
  }, []);
  

  const [selectedImage, setSelectedImage] = useState(null);
  const [value, setValue] = React.useState(3);
  const addNewProduct = (event) => {
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

  // Set the dropdown menu category names
  const handleCategoryName = (selectedCategory) => {
    console.log("selected category ", selectedCategory);
  };

  const newProductWidget = (
    <Card>
      <Box sx={{ m: 2 }} />
      <Typography sx={{ fontSize: 20 }} pl={2}>
        Add New Product
      </Typography>
      <Box sx={{ m: 2 }} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        component="form"
        onSubmit={addNewProduct}
        noValidate
      > 

        <AddProductDropDown handleCategoryName={handleCategoryName} dataList ={isLoadedCategory ? categoryList: []} defaultValue= {"Select Category"}  ></AddProductDropDown>

      </Box>
    </Card>
  );

  return (
    <AdminPanelContainer
      pageIndex={2}
      widget={newProductWidget}
    ></AdminPanelContainer>
  );
};

export default AddProduct;

// TODO        
//<AddProductDropDown handleCategoryName={handleCategoryName} dataList ={isLoadedSubcategory ? subcategoryList: []} defaultValue= {"Select Subcategory"} ></AddProductDropDown>












/*

<Grid container justifyContent="center">

          <TextField
            id="catName"
            label="New Category Name"
            name="catName"
            fullWidth
            sx={{ padding: (1, 1, 1, 1) }}
          />
          <Typography sx={{ fontSize: 16, fontWeight: "bold" }}>
            Add Product Images
          </Typography>
          <Box sx={{ m: 1 }} />
          {selectedImage && (
            <div>
              <img
                alt="not fount"
                width={"250px"}
                src={URL.createObjectURL(selectedImage)}
              />
              <br />
              <button onClick={() => setSelectedImage(null)}>Remove</button>
            </div>
          )}
          <input
            type="file"
            name="myImage"
            onChange={(event) => {
              console.log(event.target.files[0]);
              setSelectedImage(event.target.files[0]);
            }}
          />
          <Box sx={{ m: 1 }} />
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
            <Typography sx={{ color: "black" }}>Add New Product</Typography>
          </Button>
        </Box>


        */
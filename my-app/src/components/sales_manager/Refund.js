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
import SalesManagerPanel from "./SalesManager";
import { useState, useEffect } from "react";
import axios from "axios";
import { getCookie } from "../recoils/atoms";
import { getData } from "../recoils/getterFunctions";
import OrderItem from "../account/order/orderItem";
const access = getCookie("access_token");
const Refund = (props) => {
  const [refundList, setRefundList] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [refundId, setRefundId] = useState(-1);
  //const [categoryName, setCategoryName] = useState("");

  const getRefunds = async () => {
    const { data } = await axios({
      method: "get",
      url: "http://164.92.208.145/api/v1/users/orders/refunds",
      withCredentials: false,
    });

    setRefundList(data.data);
    console.log(data.data);
    setIsLoaded(true);
  };
  useEffect(() => {
    getData("http://164.92.208.145/api/v1/users/orders/refunds")
      .then((res) => {
        setRefundList(res);
        console.log(res.data);
      })
      .then(() => {
        setIsLoaded(true);
      });
  }, []);

  const newCategoryWidget = (
    <Card>
      <Typography sx={{ fontSize: 20 }} pl={2}>
        Refund Requested Products
      </Typography>
      {/* {isLoaded ? (
        <Stack direction="column">
          {refundList.map((order, index) => {
            return (
              <div style={{ display: "block" }}>
                <OrderItem key={index} data={order}></OrderItem>
              </div>
            );
          })}
        </Stack>
      ) : (
        <div>Loading...</div>
      )} */}
    </Card>
  );

  return (
    <SalesManagerPanel
      pageIndex={2}
      widget={newCategoryWidget}
    ></SalesManagerPanel>
  );
};

export default Refund;

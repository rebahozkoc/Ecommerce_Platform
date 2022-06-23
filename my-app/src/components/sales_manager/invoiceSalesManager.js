import * as React from "react";
import Link from "@mui/material/Link";
import { Card, Typography, Stack, TextField, Button, Box } from "@mui/material";
import SalesManagerPanel from "./SalesManager";
import { useState, useEffect } from "react";
import axios from "axios";
import { getCookie } from "../recoils/atoms";
import { getData } from "../recoils/getterFunctions";
import OrderMiniItem from "../account/order/orderMiniItem";
import OrderItem from "../account/order/orderItem";
import { useRef } from "react";

const access = getCookie("access_token");

const InvoiceSalesManager = (props) => {
  const [refundList, setRefundList] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [refundId, setRefundId] = useState(-1);
  const startRef = useRef("");
  const endRef = useRef("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [isDateValid, setIsDateValid] = useState(false);
  const addNewCategory = async (event) => {
    setStartDate(startRef.current.value);
    setEndDate(endRef.current.value);
    console.log("date start", startDate, "date end", endDate);
    if (startDate !== "" && endDate !== "") {
      setIsDateValid(!isDateValid);
    }
  };

  const [orderList, setData] = useState([]);
  useEffect(() => {
    if (startDate !== "" && endDate !== "") {
      getData(
        `http://164.92.208.145/api/v1/users/orders/get_all_invoices?start=${startDate}&end=${endDate}`
      )
        .then((res) => {
          console.log("Order response", res.data);

          setData(res.data);
          setIsLoaded(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [isDateValid]);

  const newCategoryWidget = (
    <Card>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        onClick={addNewCategory}
        noValidate
      >
        <Stack direction="row" justifyContent="space-around" sx={{ m: 2 }}>
          <TextField
            required
            id="dateStart"
            label="Start Date"
            type="date"
            inputRef={startRef}
            defaultValue="2022-06-23"
            sx={{ width: 220 }}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            required
            id="dateEnd"
            label="End Date"
            type="date"
            inputRef={endRef}
            defaultValue="2022-06-24"
            sx={{ width: 220 }}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Stack>
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
          Selected
        </Button>
      </Box>
      <Typography sx={{ fontSize: 20 }} pl={2}>
        Invoices In The Selected Date Range
      </Typography>
      {isLoaded ? (
        <Stack direction="column">
          {orderList.data.map((order, index) => {
            return (
              <div style={{ display: "block" }}>
                <OrderItem key={index} data={order}></OrderItem>
              </div>
            );
          })}
        </Stack>
      ) : (
        <div>Select a date</div>
      )}
    </Card>
  );

  return (
    <SalesManagerPanel
      pageIndex={0}
      widget={newCategoryWidget}
    ></SalesManagerPanel>
  );
};

export default InvoiceSalesManager;

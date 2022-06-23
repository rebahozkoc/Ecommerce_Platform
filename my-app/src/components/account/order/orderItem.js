import React from "react";
import { Box, Stack, Card, CardContent, Typography } from "@mui/material";
import themeOptions from "../../style/theme";
import PendingActionsTwoToneIcon from "@mui/icons-material/PendingActionsTwoTone";
import LocalShippingTwoToneIcon from "@mui/icons-material/LocalShippingTwoTone";
import CheckCircleOutlineTwoToneIcon from "@mui/icons-material/CheckCircleOutlineTwoTone";
import { Link } from "react-router-dom";
import OrderMiniItem from "./orderMiniItem";

const OrderItem = (props) => {
  const order = props.data;
  console.log("OrderItem", order);
  var totalPrice = 0;


  return (
    <Card
      sx={{
        minHeight: 100 + order.order_details.length * 100,
        display: "block",
        borderRadius: 3,
        border: 1,
        bgcolor: themeOptions.palette.white.main,
        m: 1,
      }}
    >
      <CardContent sx={{ pt: 3 }}>
        <Stack direction="column" justifyContent="center">
          <Stack direction="row" alignItems="center">
            <img
              src={order.order_details[0].product.photos[0].photo_url}
              height={64}
              alt={"Voidture not Found"}
            />
            <Stack
              direction="column"
              alignItems="flex-start"
              justifyContent="center"
              ml={2}
            >
              <Typography component="div" sx={{ mb: 1 }} fontSize={10}>
                {order.address.name}
              </Typography>
            </Stack>

            <Box flexGrow={1}></Box>

            <Box flexGrow={2}></Box>
          </Stack>

          {order.order_details.map((product, index) => {
            return <OrderMiniItem data={product} />;
          })}
          <Box flexGrow={5}></Box>

          <Stack direction="row" justifyContent="end" gap={1}>
            <Typography variant="h6" style={{ fontWeight: 600 }}>
              Order total:{" "}
              
              {order.order_details[0].product.price *
                order.order_details[0].quantity}{" "}
              $
            </Typography>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default OrderItem;

import PendingActionsTwoToneIcon from "@mui/icons-material/PendingActionsTwoTone";
import LocalShippingTwoToneIcon from "@mui/icons-material/LocalShippingTwoTone";
import CheckCircleOutlineTwoToneIcon from "@mui/icons-material/CheckCircleOutlineTwoTone";
import { Link } from "react-router-dom";
import React from "react";
import { Box, Stack, Card, CardContent, Typography, Button } from "@mui/material";

export default function OrderMiniItem(props) {
  const product = props.data;
  return (
    <Stack direction="row" justifyContent="space-between"
    alignItems="center">
      <img
        src={product.product.photos[0].photo_url}
        height={64}
        alt={"Voidture not Found"}
      />
      <Typography variant="body1" color="text.primary">
        {product.product.title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Quantity: {product.quantity}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Price: {product.product.price}
      </Typography>

      {(() => {
        //change status to order.order_status

        if (product.order_status === "PROCESSING") {
          return (
            <Stack direction="row" gap={1}>
              <PendingActionsTwoToneIcon
                color="primary"
                style={{ fontSize: 25 }}
              />
              {product.order_status}
            </Stack>
          );
        } else if (product.order_status === "In-transit") {
          return (
            <Stack direction="row" gap={1}>
              <LocalShippingTwoToneIcon
                color="primary"
                style={{ fontSize: 25 }}
              />
              {product.order_status}
            </Stack>
          );
        } else if (product.order_status === "Delivered") {
          return (
            <Stack direction="row" gap={1}>
              <CheckCircleOutlineTwoToneIcon
                color="primary"
                style={{ fontSize: 25 }}
              />
              {product.order_status}
            </Stack>
          );
        }
      })()}

        <Typography variant="h6" style={{ fontWeight: 600 }}>
        ${" "}
              {product.product.price *
                product.quantity}{" "}
              
            </Typography>

        <Button>
            Make Refund
        </Button>
    </Stack>
  );
}

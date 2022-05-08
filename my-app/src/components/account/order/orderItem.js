import { Box, Stack, Card, CardContent, Typography } from "@mui/material";
import themeOptions from "../../theme";
import PendingActionsTwoToneIcon from "@mui/icons-material/PendingActionsTwoTone";
import LocalShippingTwoToneIcon from "@mui/icons-material/LocalShippingTwoTone";
import CheckCircleOutlineTwoToneIcon from "@mui/icons-material/CheckCircleOutlineTwoTone";
import { Link } from "react-router-dom";
const OrderItem = (props) => {
  const order = props.data;
  return (
    <Card
      sx={{
        minHeight: 100,
        display: "block",
        borderRadius: 3,
        border: 1,
        bgcolor: themeOptions.palette.white.main,
        m: 1,
      }}
    >
      <CardContent sx={{ pt: 3 }}>
        <Stack direction="row" alignItems="center">
          <Link
            to={`/product/${order.product.title}`}
            underline="none"
            state={{ id: order.product.id }}
            style={{
              textDecoration: "none",
              color: "black",
            }}
          >
            <img
              src={order.product.photos[0].photo_url}
              height={64}
              alt={"Voidture not Found"}
            />
          </Link>
          <Stack
            direction="column"
            alignItems="flex-start"
            justifyContent="center"
            ml={2}
          >
            <Typography component="div" sx={{ mb: 1 }} fontSize={10}>
              {order.product.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Quantity: {order.quantity}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Price: {order.product.price}
            </Typography>
          </Stack>

          <Box flexGrow={1}></Box>

          {(() => {
            //change status to order.orderStatus
            let status = "Processing";
            if (status === "Processing") {
              return (
                <Stack direction="row" gap={1}>
                  <PendingActionsTwoToneIcon
                    color="primary"
                    style={{ fontSize: 25 }}
                  />
                  {status}
                </Stack>
              );
            } else if (status === "In-transit") {
              return (
                <Stack direction="row" gap={1}>
                  <LocalShippingTwoToneIcon
                    color="primary"
                    style={{ fontSize: 25 }}
                  />
                  {status}
                </Stack>
              );
            } else if (status === "Delivered") {
              return (
                <Stack direction="row" gap={1}>
                  <CheckCircleOutlineTwoToneIcon
                    color="primary"
                    style={{ fontSize: 25 }}
                  />
                  {status}
                </Stack>
              );
            }
          })()}

          <Box flexGrow={2}></Box>

          <Stack direction="row" gap={1}>
            <Typography variant="h6" style={{ fontWeight: 600 }}>
              Order total: {order.quantity * order.product.price} $
            </Typography>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default OrderItem;

/*
<div className="order-item">
            <div className="order-item-header">
                <div className="order-item-header-left">
                    <div className="order-item-header-left-order-id">
                        Order #{order.orderId}
                    </div>
                    <div className="order-item-header-left-order-date">
                        {order.orderDate}
                    </div>
                </div>
                <div className="order-item-header-right">
                    <div className="order-item-header-right-order-status">
                        {order.orderStatus}
                    </div>
                    <div className="order-item-header-right-order-total">
                        {order.orderTotal}
                    </div>
                </div>
            </div>
            <div className="order-item-body">
                <div className="order-item-body-image">
                    <img src={order.orderImage} alt="order-image" />
                </div>
                <div className="order-item-body-details">
                    <div className="order-item-body-details-product-name">
                        Product Name
                    </div>
                    <div className="order-item-body-details-product-price">
                        $100
                    </div>
                    <div className="order-item-body-details-product-quantity">
                        Quantity: 1
                    </div>
                </div>
            </div>
        </div>

        */

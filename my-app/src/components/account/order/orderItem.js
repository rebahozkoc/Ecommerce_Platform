import { Box, Stack, Card, CardContent, Typography } from "@mui/material";
import themeOptions from "../../theme";
import PendingActionsTwoToneIcon from '@mui/icons-material/PendingActionsTwoTone';
import LocalShippingTwoToneIcon from '@mui/icons-material/LocalShippingTwoTone';
import CheckCircleOutlineTwoToneIcon from '@mui/icons-material/CheckCircleOutlineTwoTone';
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
          
          <img src={order.orderImage} height={64} alt={order.orderId} />

          <Stack
            direction="column"
            alignItems="flex-start"
            justifyContent="center"
            ml={2}
            
          >
            <Typography variant="h6" component="div" sx={{ mb: 1 }}>
              {order.orderTitle}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Order ID: {order.orderId}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Order Date: {order.orderDate}
            </Typography>
          </Stack >
            
          <Box flexGrow={1}></Box>

            {(() => {
                if (order.orderStatus === "Pending") {
                    return <Stack direction="row" gap={1}> <PendingActionsTwoToneIcon color="primary"  style={{ fontSize: 25}} /> {order.orderStatus} </Stack>
                } else if (order.orderStatus === "Shipped") {
                    return <Stack direction="row" gap={1}> <LocalShippingTwoToneIcon color="primary"  style={{ fontSize: 25 }} /> {order.orderStatus}</Stack>
                } else if (order.orderStatus === "Delivered") {
                    return <Stack direction="row" gap={1}>  <CheckCircleOutlineTwoToneIcon color="primary" style={{ fontSize: 25 }} />  {order.orderStatus} </Stack>
                }
            })()}
                
            <Box flexGrow={2}></Box>

            
            <Stack direction="row" gap={1}>
                <Typography variant="h6" style={{ fontWeight: 600 }}>
                    Order total: {order.orderTotal} $
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

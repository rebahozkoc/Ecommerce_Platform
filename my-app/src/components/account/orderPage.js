import ProfilePageContainer from "./profilePageContainer";
import OrderItem from "./order/orderItem";
import { Stack } from "@mui/material";
const OrderPage = () => {
  const orderList = [
    {
      orderId: "1",
      orderDate: "2020-01-01",
      orderStatus: "Pending",
      orderTotal: "100",
      orderImage:
        "https://img.vivense.com/1920x1280/images/7f2c0de1211f401b8215e1344945642f.jpg",
    },
    {
      orderId: "2",
      orderDate: "2020-01-01",
      orderStatus: "Delivered",
      orderTotal: "100",
      orderImage:
        "https://img.vivense.com/1920x1280/images/7f2c0de1211f401b8215e1344945642f.jpg",
    },
    {
      orderId: "3",
      orderDate: "2020-01-01",
      orderStatus: "Shipped",
      orderTotal: "100",
      orderImage:
        "https://img.vivense.com/1920x1280/images/70c32b239dcb43c29014d19c4fb520fc.jpg",
    },
    {
      orderId: "4",
      orderDate: "2020-01-01",
      orderStatus: "Pending",
      orderTotal: "100",
      orderImage:
        "https://img.vivense.com/1920x1280/images/7f2c0de1211f401b8215e1344945642f.jpg",
    },
    {
      orderId: "5",
      orderDate: "2020-01-01",
      orderStatus: "Pending",
      orderTotal: "100",
      orderImage:
        "https://img.vivense.com/1920x1280/images/7f2c0de1211f401b8215e1344945642f.jpg",
    },
    {
      orderId: "6",
      orderDate: "2020-01-01",
      orderStatus: "Pending",
      orderTotal: "100",
      orderImage:
        "https://img.vivense.com/1920x1280/images/7f2c0de1211f401b8215e1344945642f.jpg",
    },
    {
      orderId: "7",
      orderDate: "2020-01-01",
      orderStatus: "Pending",
      orderTotal: "100",
      orderImage:
        "https://img.vivense.com/1920x1280/images/7f2c0de1211f401b8215e1344945642f.jpg",
    },
  ];
  const orderWidget = (
    <Stack direction="column">
      {orderList.map((order, index) => {
        return (
          <div style={{ display: "block" }}>
            <OrderItem
                data={order}
              >
              </OrderItem>
          </div>
        );
      })}

      
    </Stack>
  );

  return (
    <ProfilePageContainer
      pageIndex={0}
      widget={orderWidget}
    ></ProfilePageContainer>
  );
};

export default OrderPage;

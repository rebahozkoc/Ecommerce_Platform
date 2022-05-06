import axios from "axios";
import { getCookie } from "./atoms";

const access = getCookie("access_token");

export const getData = async (link) => {
  try {
    let res = await axios.get(link, {
      headers: {
        Accept: "*/*",
        Authorization: `Bearer ${access}`,
      },
    });
    if (res.status >= 200 && res.status < 300) {
      // test for status you want, etc

      return res.data;
    } else {
      return null;
    }

    // Don't forget to return something
  } catch (err) {
    console.log(err);
  }
};

export const getDataWithoutAccess = async (link) => {
  try {
    let res = await axios.get(link, {
      headers: {
        Accept: "*/*",
      },
    });
    if (res.status >= 200 && res.status < 300) {
      // test for status you want, etc

      return res.data;
    } else {
      return null;
    }
    // Don't forget to return something
  } catch (err) {
    console.log(err);
  }
};

export const createShoppingDict = () => {
  let orderList = getCookie("orderList");
  let cartDict = {};

  while (orderList != "") {
    let num = Number(orderList[0]);
    //console.log(cartDict);
    if (orderList.length > 2) {
      orderList = orderList.substring(2);
    } else {
      orderList = "";
    }
    if (num in cartDict) {
      cartDict[num] += 1;
    } else {
      cartDict[num] = 1;
    }
  }

  return cartDict;
};

export const addCardtoCookie = (proId) => {
  let orderList = getCookie("orderList");
  orderList = `${orderList} ${proId}`;
  document.cookie = `orderList=${orderList}`;
};

export const createOrderCookie = (cartDict) => {
  document.cookie = "orderList=";

  for (let item in cartDict) {
    console.log(item);
    for (let i = 0; i < cartDict[item]; i++) {
      console.log(i);
      addCardtoCookie(item);
    }
  }
};

export const decreaseCardCookie = (proId) => {
  let cartDict = createShoppingDict();
  cartDict[proId] -= 1;
  createOrderCookie(cartDict);
};

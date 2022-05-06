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

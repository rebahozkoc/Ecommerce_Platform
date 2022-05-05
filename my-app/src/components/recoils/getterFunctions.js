import axios from "axios";
import { getCookie } from "./atoms";

const access = getCookie("access_token");

export const getData = () => {
  try {
    let res = axios.get("http://164.92.208.145/api/v1/user/addresses", {
      headers: {
        Accept: "*/*",
        Authorization: `Bearer ${access}`,
      },
    });
    if (res.status >= 200 && res.status < 300) {
      // test for status you want, etc

      return res.data.data;
    }
    return res.data.data;
    // Don't forget to return something
  } catch (err) {
    console.log(err);
  }
};

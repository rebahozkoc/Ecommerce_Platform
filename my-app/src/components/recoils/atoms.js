import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import * as React from "react";
import { useState } from "react";

export function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

export const loggedState = atom(
  {
    key: "logged",
    default: getCookie("isLogged") === "true",
  },
  [document.cookie]
);

export const access_token = atom({
  key: "access_token",
  default: getCookie("access_token"),
});

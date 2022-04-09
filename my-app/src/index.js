import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import SignIn from "./components/signIn/SignIn";

import SignUp from "./components/signIn/SignUp";
import ForgetPassword from "./components/signIn/ForgetPassword";
import Dummy from "./components/Dummy";
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/Dummy" element={<Dummy />} />
      <Route path="forgetPassword" element={<ForgetPassword />} />
      <Route path="/SignIn/" element={<SignIn />}></Route>
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/" element={<App />}></Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

reportWebVitals();

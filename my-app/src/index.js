import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import SignIn from "./components/signIn/SignIn";
import ResetPassword from "./components/signIn/resetPassword";
import SignUp from "./components/signIn/SignUp";
import ForgetPassword from "./components/signIn/ForgetPassword";
import Dummy from "./components/Dummy";
import CategoryProduct from "./containers/categoryProduct";
import ShoppingBasket from "./components/shoppingBasket/ShoppingBasket";
import Product from "./components/product/Product";
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/Basket" element={<ShoppingBasket />} />
      <Route path="/Categories" element={<CategoryProduct />} />
      <Route path="/Dummy" element={<Dummy />} />
      <Route path="/forgetPassword" element={<ForgetPassword />}></Route>
      <Route path="resetPass" element={<ResetPassword />} />
      <Route path="/product" element={<Product />} />
      <Route path="/SignIn/" element={<SignIn />}></Route>
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/" element={<App />}></Route>
    </Routes>
  </BrowserRouter>,

  document.getElementById("root")
);

reportWebVitals();

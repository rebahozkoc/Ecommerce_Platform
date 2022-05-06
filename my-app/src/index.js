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
import AddressListPage from "./components/payment/addressList/addressListPage";
import PaymentPage from "./components/payment/creditCard/paymentPage";
import OrderPage from "./components/account/orderPage";
import CouponPage from "./components/account/couponPage";
import UpdateInformationPage from "./components/account/updateInformationPage";
import UpdateAddressPage from "./components/account/updateAddressPage";
import UpdateFavoritesPage from "./components/account/updateFavoritesPage";
import UpdatePaymentPage from "./components/account/updatePaymentPage";
import PaymentSuccessPage from "./components/payment/paymentSuccess/paymentSuccessPage";
import { RecoilRoot } from "recoil";
ReactDOM.render(
  <RecoilRoot>
    <BrowserRouter>
      <Routes>
        <Route path="/Basket" element={<ShoppingBasket />} />
        <Route path="/Categories/:type" element={<CategoryProduct />} />
        <Route path="/Dummy" element={<Dummy />} />
        <Route path="/forgetPassword" element={<ForgetPassword />}></Route>
        <Route path="resetPass" element={<ResetPassword />} />
        <Route path="/product/:type" element={<Product />} />
        <Route path="/SignIn/" element={<SignIn />}></Route>
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/address-list" element={<AddressListPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/orders" element={<OrderPage />} />
        <Route path="/coupons" element={<CouponPage />} />
        <Route path="/update-information" element={<UpdateInformationPage />} />
        <Route path="/update-address" element={<UpdateAddressPage />} />
        <Route path="/update-favorites" element={<UpdateFavoritesPage />} />
        <Route path="/update-payment" element={<UpdatePaymentPage />} />
        <Route path="/payment-success" element={<PaymentSuccessPage />} />

        <Route path="/" element={<App />}></Route>
      </Routes>
    </BrowserRouter>
  </RecoilRoot>,

  document.getElementById("root")
);

reportWebVitals();

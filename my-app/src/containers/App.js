import React, { useState } from "react";
import Header from "../components/header/Header";
import { Outlet, Link } from "react-router-dom";
const App = () => {
  return (
    <div>
      <Header></Header>
      <h1>Bookkeeper</h1>

      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/expenses">Expenses</Link>
      </nav>
      <Outlet></Outlet>
    </div>
  );
};

export default App;

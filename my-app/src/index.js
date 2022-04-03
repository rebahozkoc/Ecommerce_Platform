import React from "react";
import ReactDOM from "react-dom";

import App from "./containers/App";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Expenses from "./containers/Expense";
import Invoices from "./containers/invoices";
import Invoice from "./containers/invoice";
import reportWebVitals from "./reportWebVitals";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="expenses" element={<Expenses />} />
        <Route path="invoices" element={<Invoices />}>
          <Route
            index
            element={
              <main style={{ padding: "1rem" }}>
                <p>Select an invoice</p>
              </main>
            }
          />
          <Route path=":invoiceId" element={<Invoice />} />
        </Route>
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);

reportWebVitals();

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import InvoiceContextProvider from "./context/invoice-context";

ReactDOM.render(
  <Router>
    <InvoiceContextProvider>
      <App />
    </InvoiceContextProvider>
  </Router>,
  document.getElementById("root")
);

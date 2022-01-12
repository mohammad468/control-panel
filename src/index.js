import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "react-bootstrap";
import App from "./App";
import "./App.scss";

ReactDOM.render(
  <ThemeProvider dir="rtl">
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);

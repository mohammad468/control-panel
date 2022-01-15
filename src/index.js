import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "react-bootstrap";
import App from "./App";
import "./App.scss";

import { CoinsContextProvider } from "./context/CoinsContext";

ReactDOM.render(
  <ThemeProvider dir="rtl">
    <CoinsContextProvider>
      <App />
    </CoinsContextProvider>
  </ThemeProvider>,
  document.getElementById("root")
);

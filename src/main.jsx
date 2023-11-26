import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Cofferoasters } from "./Cofferoasters";
import './style/style.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <Cofferoasters></Cofferoasters>
    </React.StrictMode>
  </BrowserRouter>
);

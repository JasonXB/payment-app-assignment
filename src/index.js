import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./pages/App";
import "tw-elements";
import GlobalContextProvider from "./context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <GlobalContextProvider>
    <App />
  </GlobalContextProvider>
  // </React.StrictMode>
);

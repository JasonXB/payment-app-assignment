import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";
import App from "./App";
import GlobalContextProvider from "./state-management/context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalContextProvider>
      <App />
    </GlobalContextProvider>
  </React.StrictMode>
);

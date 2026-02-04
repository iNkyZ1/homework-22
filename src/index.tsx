import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { StoreProvider } from "./app/providers/StoreProvider";
import { MainApp } from "./apps/MainApp/MainApp";
import "./index.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <StoreProvider>
        <MainApp />
      </StoreProvider>
    </BrowserRouter>
  </React.StrictMode>,
);

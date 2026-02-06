import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { StoreProvider } from "./app/providers/StoreProvider";
import { AppRouter } from "src/app/routes/AppRouter";
import "./index.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <StoreProvider>
        <AppRouter />
      </StoreProvider>
    </BrowserRouter>
  </React.StrictMode>,
);

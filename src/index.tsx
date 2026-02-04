import React from "react";
import ReactDOM from "react-dom/client";

import { StoreProvider } from "./app/providers/StoreProvider";
import { MainApp } from "./apps/MainApp/MainApp";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <React.StrictMode>
    <StoreProvider>
      <MainApp />
    </StoreProvider>
  </React.StrictMode>,
);

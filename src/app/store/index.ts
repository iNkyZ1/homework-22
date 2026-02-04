import { applyMiddleware, createStore } from "redux";
import { thunk } from "redux-thunk";

import { rootReducer } from "./rootReducer";

export const store = createStore(
  rootReducer,
  undefined,
  applyMiddleware(thunk),
);

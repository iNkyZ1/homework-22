import { combineReducers } from "redux";

const __stubReducer = (state = null) => state;

export const rootReducer = combineReducers({
  __stub: __stubReducer,
});

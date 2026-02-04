import { combineReducers } from "redux";
import { contactsReducer } from "../../entities/contact/model/reducer";

export const rootReducer = combineReducers({
  contacts: contactsReducer,
});

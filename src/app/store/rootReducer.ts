import { combineReducers } from "redux";

import { contactsReducer } from "../../entities/contact/model/reducer";
import { groupsReducer } from "../../entities/group/model/reducer";

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  groups: groupsReducer,
});

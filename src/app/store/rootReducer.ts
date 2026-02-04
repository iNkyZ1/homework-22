import { combineReducers } from "redux";

import { contactsReducer } from "../../entities/contact/model/reducer";
import { groupsReducer } from "../../entities/group/model/reducer";
import { favoritesReducer } from "../../features/favorites/model/reducer";
import { contactsFilterReducer } from "../../features/contacts-filter/model/reducer";

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  groups: groupsReducer,
  favorites: favoritesReducer,
  contactsFilter: contactsFilterReducer,
});

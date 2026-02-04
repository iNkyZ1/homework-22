import type { ContactsFilterState } from "./types";
import type { ContactsFilterActions } from "./actions";
import {
  CONTACTS_FILTER_SET_NAME,
  CONTACTS_FILTER_SET_GROUP,
  CONTACTS_FILTER_RESET,
} from "./actions";

const initialState: ContactsFilterState = {
  name: "",
  groupId: null,
};

export function contactsFilterReducer(
  state: ContactsFilterState = initialState,
  action: ContactsFilterActions,
): ContactsFilterState {
  switch (action.type) {
    case CONTACTS_FILTER_SET_NAME:
      return {
        ...state,
        name: action.payload,
      };

    case CONTACTS_FILTER_SET_GROUP:
      return {
        ...state,
        groupId: action.payload,
      };

    case CONTACTS_FILTER_RESET:
      return initialState;

    default:
      return state;
  }
}

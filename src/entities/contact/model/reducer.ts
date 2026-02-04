import type { ContactsState } from "./types";
import type { ContactsActions } from "./actions";
import {
  CONTACTS_REQUEST,
  CONTACTS_SUCCESS,
  CONTACTS_FAILURE,
} from "./actions";

const initialState: ContactsState = {
  data: [],
  loading: false,
  error: null,
};

export function contactsReducer(
  state: ContactsState = initialState,
  action: ContactsActions,
): ContactsState {
  switch (action.type) {
    case CONTACTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case CONTACTS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };

    case CONTACTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
}

import type { AnyAction } from "redux";
import type { ThunkAction } from "redux-thunk";

import type { RootState } from "../../../app/store/types";

import { fetchContacts } from "../../../shared/api/contacts";
import { contactsFailure, contactsRequest, contactsSuccess } from "./actions";
import type { Contact } from "./types";

type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  AnyAction
>;

export const loadContacts = (): AppThunk<Promise<void>> => async (dispatch) => {
  dispatch(contactsRequest());

  try {
    const contacts: Contact[] = await fetchContacts();
    dispatch(contactsSuccess(contacts));
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    dispatch(contactsFailure(message));
  }
};

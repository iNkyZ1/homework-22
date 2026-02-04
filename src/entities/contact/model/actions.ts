import type { Contact } from "./types";

export const CONTACTS_REQUEST = "contacts/request";
export const CONTACTS_SUCCESS = "contacts/success";
export const CONTACTS_FAILURE = "contacts/failure";

export const contactsRequest = () => ({
  type: CONTACTS_REQUEST as typeof CONTACTS_REQUEST,
});

export const contactsSuccess = (contacts: Contact[]) => ({
  type: CONTACTS_SUCCESS as typeof CONTACTS_SUCCESS,
  payload: contacts,
});

export const contactsFailure = (error: string) => ({
  type: CONTACTS_FAILURE as typeof CONTACTS_FAILURE,
  payload: error,
});

export type ContactsActions =
  | ReturnType<typeof contactsRequest>
  | ReturnType<typeof contactsSuccess>
  | ReturnType<typeof contactsFailure>;

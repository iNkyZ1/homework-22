import type { RootState } from "../../../app/store/types";
import type { Contact } from "./types";

export const selectContactsState = (state: RootState) => state.contacts;

export const selectAllContacts = (state: RootState): Contact[] =>
  selectContactsState(state).data;

export const selectContactsLoading = (state: RootState): boolean =>
  selectContactsState(state).loading;

export const selectContactsError = (state: RootState): string | null =>
  selectContactsState(state).error;

export const selectContactById = (
  state: RootState,
  contactId: string,
): Contact | undefined =>
  selectAllContacts(state).find((contact) => contact.id === contactId);

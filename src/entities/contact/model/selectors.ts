import type { RootState } from "../../../app/store/types";
import type { Contact } from "./types";

import {
  selectContactsFilterName,
  selectContactsFilterGroupId,
} from "../../../features/contacts-filter/model/selectors";

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

export const selectFilteredContacts = (state: RootState): Contact[] => {
  const contacts = selectAllContacts(state);

  const name = selectContactsFilterName(state).trim().toLowerCase();
  const groupId = selectContactsFilterGroupId(state);

  return contacts.filter((contact) => {
    const matchesName =
      name.length === 0 ? true : contact.name.toLowerCase().includes(name);

    const matchesGroup = groupId === null ? true : true;

    return matchesName && matchesGroup;
  });
};

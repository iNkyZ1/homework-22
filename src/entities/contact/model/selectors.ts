import { createSelector } from "reselect";

import type { RootState } from "src/app/store/types";
import type { Contact } from "./types";

import {
  selectContactsFilterGroupId,
  selectContactsFilterName,
} from "src/features/contacts-filter/model/selectors";
import { selectAllGroups } from "src/entities/group/model/selectors";

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

export const selectFilteredContacts = createSelector(
  [
    selectAllContacts,
    selectContactsFilterName,
    selectContactsFilterGroupId,
    selectAllGroups,
  ],
  (contacts, filterName, filterGroupId, groups) => {
    let result = contacts;

    const name = filterName.trim().toLowerCase();
    if (name) {
      result = result.filter((c) => c.name.toLowerCase().includes(name));
    }

    if (filterGroupId) {
      const group = groups.find((g) => g.id === filterGroupId);
      if (!group) return [];

      const allowedIds = new Set(group.contactIds);
      result = result.filter((c) => allowedIds.has(c.id));
    }

    return result;
  },
);

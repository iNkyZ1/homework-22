import type { RootState } from "../../../app/store/types";

export const selectContactsFilterState = (state: RootState) =>
  state.contactsFilter;

export const selectContactsFilterName = (state: RootState) =>
  selectContactsFilterState(state).name;

export const selectContactsFilterGroupId = (state: RootState) =>
  selectContactsFilterState(state).groupId;

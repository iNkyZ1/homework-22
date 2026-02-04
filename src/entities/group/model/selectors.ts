import type { RootState } from "../../../app/store/types";
import type { Group } from "./types";

export const selectGroupsState = (state: RootState) => state.groups;

export const selectAllGroups = (state: RootState): Group[] =>
  selectGroupsState(state).data;

export const selectGroupsLoading = (state: RootState): boolean =>
  selectGroupsState(state).loading;

export const selectGroupsError = (state: RootState): string | null =>
  selectGroupsState(state).error;

export const selectGroupById = (
  state: RootState,
  groupId: string,
): Group | undefined =>
  selectAllGroups(state).find((group) => group.id === groupId);

import type { Group } from "./types";

export const GROUPS_REQUEST = "groups/request";
export const GROUPS_SUCCESS = "groups/success";
export const GROUPS_FAILURE = "groups/failure";

export const groupsRequest = () => ({
  type: GROUPS_REQUEST as typeof GROUPS_REQUEST,
});

export const groupsSuccess = (groups: Group[]) => ({
  type: GROUPS_SUCCESS as typeof GROUPS_SUCCESS,
  payload: groups,
});

export const groupsFailure = (error: string) => ({
  type: GROUPS_FAILURE as typeof GROUPS_FAILURE,
  payload: error,
});

export type GroupsActions =
  | ReturnType<typeof groupsRequest>
  | ReturnType<typeof groupsSuccess>
  | ReturnType<typeof groupsFailure>;

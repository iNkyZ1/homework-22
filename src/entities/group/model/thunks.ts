import type { AnyAction } from "redux";
import type { ThunkAction } from "redux-thunk";

import type { RootState } from "../../../app/store/types";

import { fetchGroups } from "../../../shared/api/groups";
import { groupsFailure, groupsRequest, groupsSuccess } from "./actions";
import type { Group } from "./types";

type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  AnyAction
>;

export const loadGroups = (): AppThunk<Promise<void>> => async (dispatch) => {
  dispatch(groupsRequest());

  try {
    const groups: Group[] = await fetchGroups();
    dispatch(groupsSuccess(groups));
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    dispatch(groupsFailure(message));
  }
};

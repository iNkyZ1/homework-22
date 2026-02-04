import type { GroupsState } from "./types";
import type { GroupsActions } from "./actions";
import { GROUPS_REQUEST, GROUPS_SUCCESS, GROUPS_FAILURE } from "./actions";

const initialState: GroupsState = {
  data: [],
  loading: false,
  error: null,
};

export function groupsReducer(
  state: GroupsState = initialState,
  action: GroupsActions,
): GroupsState {
  switch (action.type) {
    case GROUPS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case GROUPS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };

    case GROUPS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
}

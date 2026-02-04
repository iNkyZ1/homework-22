import type { FavoritesState } from "./types";
import type { FavoritesActions } from "./actions";
import { FAVORITES_ADD, FAVORITES_REMOVE, FAVORITES_TOGGLE } from "./actions";

const initialState: FavoritesState = {
  ids: [],
};

export function favoritesReducer(
  state: FavoritesState = initialState,
  action: FavoritesActions,
): FavoritesState {
  switch (action.type) {
    case FAVORITES_ADD: {
      const id = action.payload;

      if (state.ids.includes(id)) {
        return state;
      }

      return {
        ...state,
        ids: [...state.ids, id],
      };
    }

    case FAVORITES_REMOVE: {
      const id = action.payload;

      return {
        ...state,
        ids: state.ids.filter((existingId) => existingId !== id),
      };
    }

    case FAVORITES_TOGGLE: {
      const id = action.payload;

      const hasId = state.ids.includes(id);

      return {
        ...state,
        ids: hasId
          ? state.ids.filter((existingId) => existingId !== id)
          : [...state.ids, id],
      };
    }

    default:
      return state;
  }
}

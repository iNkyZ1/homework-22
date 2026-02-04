export const FAVORITES_ADD = "favorites/add";
export const FAVORITES_REMOVE = "favorites/remove";
export const FAVORITES_TOGGLE = "favorites/toggle";

export const addFavorite = (contactId: string) => ({
  type: FAVORITES_ADD as typeof FAVORITES_ADD,
  payload: contactId,
});

export const removeFavorite = (contactId: string) => ({
  type: FAVORITES_REMOVE as typeof FAVORITES_REMOVE,
  payload: contactId,
});

export const toggleFavorite = (contactId: string) => ({
  type: FAVORITES_TOGGLE as typeof FAVORITES_TOGGLE,
  payload: contactId,
});

export type FavoritesActions =
  | ReturnType<typeof addFavorite>
  | ReturnType<typeof removeFavorite>
  | ReturnType<typeof toggleFavorite>;

import type { RootState } from "../../../app/store/types";
import type { Contact } from "../../../entities/contact/model/types";

import { selectAllContacts } from "../../../entities/contact/model/selectors";

export const selectFavoritesState = (state: RootState) => state.favorites;

export const selectFavoriteIds = (state: RootState): string[] =>
  selectFavoritesState(state).ids;

export const selectIsFavorite = (
  state: RootState,
  contactId: string,
): boolean => selectFavoriteIds(state).includes(contactId);

export const selectFavoriteContacts = (state: RootState): Contact[] => {
  const ids = selectFavoriteIds(state);
  const contacts = selectAllContacts(state);

  return ids
    .map((id) => contacts.find((contact) => contact.id === id))
    .filter((contact): contact is Contact => Boolean(contact));
};

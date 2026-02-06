export { FavoriteToggleButton } from "./ui/FavoriteToggleButton";

export { selectFavoriteContacts, selectIsFavorite } from "./model/selectors";

export { addFavorite, removeFavorite, toggleFavorite } from "./model/actions";

export { favoritesReducer } from "./model/reducer";

export type { FavoriteContactsDto } from "./model/FavoriteContactsDto";

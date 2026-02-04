import { useSelector } from "react-redux";

import { selectFavoriteContacts } from "../features/favorites/model/selectors";
import type { RootState } from "../app/store/types";

export function FavoritesPage() {
  const favorites = useSelector((state: RootState) =>
    selectFavoriteContacts(state),
  );

  if (favorites.length === 0) {
    return <p>Избранных контактов нет</p>;
  }

  return (
    <ul>
      {favorites.map((contact) => (
        <li key={contact.id}>
          {contact.name} — {contact.phone}
        </li>
      ))}
    </ul>
  );
}

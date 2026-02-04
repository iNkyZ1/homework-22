import { useAppSelector } from "../shared/lib/storeHooks";

import { selectFavoriteContacts } from "../features/favorites/model/selectors";

export function FavoritesPage() {
  const favorites = useAppSelector(selectFavoriteContacts);

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

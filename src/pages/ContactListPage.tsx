import { useSelector } from "react-redux";

import { selectAllContacts } from "../entities/contact/model/selectors";
import type { RootState } from "../app/store/types";

export function ContactListPage() {
  const contacts = useSelector((state: RootState) => selectAllContacts(state));

  if (contacts.length === 0) {
    return <p>Контакты отсутствуют</p>;
  }

  return (
    <ul>
      {contacts.map((contact) => (
        <li key={contact.id}>
          {contact.name} — {contact.phone}
        </li>
      ))}
    </ul>
  );
}

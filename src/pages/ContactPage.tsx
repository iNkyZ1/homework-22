import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectContactById } from "../entities/contact/model/selectors";
import type { RootState } from "../app/store/types";

export function ContactPage() {
  const { contactId } = useParams<{ contactId: string }>();

  const contact = useSelector((state: RootState) =>
    contactId ? selectContactById(state, contactId) : undefined,
  );

  if (!contact) {
    return <p>Контакт не найден</p>;
  }

  return (
    <div>
      <h2>{contact.name}</h2>
      <p>Телефон: {contact.phone}</p>
    </div>
  );
}

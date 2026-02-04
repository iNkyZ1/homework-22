import React from "react";
import { useParams } from "react-router-dom";

import { ContactCard } from "src/components/ContactCard";
import { useAppSelector } from "src/shared/lib/storeHooks";
import { selectContactById } from "src/entities/contact/model/selectors";

export function ContactPage() {
  const { contactId } = useParams<{ contactId: string }>();

  const contact = useAppSelector((state) =>
    contactId ? selectContactById(state, contactId) : undefined,
  );

  if (!contact) {
    return <p>Контакт не найден</p>;
  }

  return <ContactCard contact={contact} withLink={false} />;
}

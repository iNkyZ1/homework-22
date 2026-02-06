import React from "react";
import { useParams } from "react-router-dom";

import { useAppSelector } from "src/shared/lib/storeHooks";

import { FavoriteToggleButton } from "src/features/favorites";

import { ContactCard, selectContactById } from "src/entities/contact";

export function ContactPage() {
  const { contactId } = useParams<{ contactId: string }>();

  const contact = useAppSelector((state) =>
    contactId ? selectContactById(state, contactId) : undefined,
  );

  if (!contact) {
    return <p>Контакт не найден</p>;
  }

  return (
    <ContactCard
      contact={contact}
      withLink={false}
      actionSlot={<FavoriteToggleButton contactId={contact.id} />}
    />
  );
}

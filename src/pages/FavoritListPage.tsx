import React from "react";
import { Col, Row, Alert } from "react-bootstrap";

import { useAppSelector } from "src/shared/lib/storeHooks";
import {
  FavoriteToggleButton,
  selectFavoriteContacts,
} from "src/features/favorites";

import { ContactCard } from "src/entities/contact";

export function FavoritesPage() {
  const favorites = useAppSelector(selectFavoriteContacts);

  if (favorites.length === 0) {
    return <Alert variant="secondary">Избранных контактов нет</Alert>;
  }

  return (
    <Row xxl={4} className="g-4">
      {favorites.map((contact) => (
        <Col key={contact.id}>
          <ContactCard
            contact={contact}
            withLink
            actionSlot={<FavoriteToggleButton contactId={contact.id} />}
          />
        </Col>
      ))}
    </Row>
  );
}

import React, { memo } from "react";
import { Col, Row, Alert } from "react-bootstrap";

import { ContactCard } from "src/entities/contact/ui/ContactCard";
import { useAppSelector } from "src/shared/lib/storeHooks";
import { selectFavoriteContacts } from "src/features/favorites/model/selectors";

export const FavoritesPage = memo(() => {
  const favorites = useAppSelector(selectFavoriteContacts);

  if (favorites.length === 0) {
    return <Alert variant="secondary">Избранных контактов нет</Alert>;
  }

  return (
    <Row xxl={4} className="g-4">
      {favorites.map((contact) => (
        <Col key={contact.id}>
          <ContactCard contact={contact} withLink />
        </Col>
      ))}
    </Row>
  );
});

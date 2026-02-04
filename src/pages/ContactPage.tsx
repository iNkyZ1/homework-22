import React, { memo } from "react";
import { Card, ListGroup } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

import type { Contact } from "src/entities/contact/model/types";
import { FavoriteToggleButton } from "src/features/favorites/model/ui/FavoriteToggleButton";

import { useAppSelector } from "src/shared/lib/storeHooks";
import { selectContactById } from "src/entities/contact/model/selectors";

interface ContactCardProps {
  contact: Contact;
  withLink?: boolean;
}

export const ContactCard = memo<ContactCardProps>(
  ({ contact: { photo, id, name, phone, birthday, address }, withLink }) => {
    return (
      <Card>
        <Card.Img variant="top" src={photo} />

        <Card.Body>
          <Card.Title className="d-flex justify-content-between align-items-center">
            <span>
              {withLink ? <Link to={`/contacts/${id}`}>{name}</Link> : name}
            </span>

            <FavoriteToggleButton contactId={id} />
          </Card.Title>

          <Card.Body>
            <ListGroup>
              <ListGroup.Item>
                <Link to={`tel:${phone}`} target="_blank">
                  {phone}
                </Link>
              </ListGroup.Item>
              <ListGroup.Item>{birthday}</ListGroup.Item>
              <ListGroup.Item>{address}</ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card.Body>
      </Card>
    );
  },
);

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

import React, { memo, ReactNode } from "react";
import { Card, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

import type { Contact } from "src/entities/contact/model/types";

interface ContactCardProps {
  contact: Contact;
  withLink?: boolean;
  actionSlot?: ReactNode;
}

export const ContactCard = memo<ContactCardProps>(
  ({
    contact: { photo, id, name, phone, birthday, address },
    withLink,
    actionSlot,
  }) => {
    return (
      <Card>
        <Card.Img variant="top" src={photo} />

        <Card.Body>
          <Card.Title className="d-flex justify-content-between align-items-center">
            <span>
              {withLink ? <Link to={`/contacts/${id}`}>{name}</Link> : name}
            </span>

            {actionSlot}
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

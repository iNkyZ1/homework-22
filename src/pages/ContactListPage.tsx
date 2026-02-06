import React, { memo } from "react";
import { Alert, Col, Row } from "react-bootstrap";

import { useAppDispatch, useAppSelector } from "src/shared/lib/storeHooks";

import {
  ContactCard,
  selectContactsError,
  selectContactsLoading,
  selectFilteredContacts,
} from "src/entities/contact";

import {
  selectAllGroups,
  selectGroupsError,
  selectGroupsLoading,
} from "src/entities/group";

import {
  FilterForm,
  FilterFormValues,
  selectContactsFilterGroupId,
  selectContactsFilterName,
  setContactsFilterGroup,
  setContactsFilterName,
} from "src/features/contacts-filter";

import { FavoriteToggleButton } from "src/features/favorites";

export const ContactListPage = memo(() => {
  const dispatch = useAppDispatch();

  const groups = useAppSelector(selectAllGroups);
  const contacts = useAppSelector(selectFilteredContacts);

  const filterName = useAppSelector(selectContactsFilterName);
  const filterGroupId = useAppSelector(selectContactsFilterGroupId);

  const contactsLoading = useAppSelector(selectContactsLoading);
  const groupsLoading = useAppSelector(selectGroupsLoading);
  const isLoading = contactsLoading || groupsLoading;

  const contactsError = useAppSelector(selectContactsError);
  const groupsError = useAppSelector(selectGroupsError);
  const error = contactsError || groupsError;

  const onSubmit = (fv: Partial<FilterFormValues>) => {
    dispatch(setContactsFilterName(fv.name ?? ""));
    dispatch(setContactsFilterGroup(fv.groupId ? fv.groupId : null));
  };

  return (
    <Row xxl={1}>
      <Col className="mb-3">
        <FilterForm
          groupContactsList={groups}
          initialValues={{
            name: filterName,
            groupId: filterGroupId ?? "",
          }}
          onSubmit={onSubmit}
        />
      </Col>

      <Col>
        {isLoading ? (
          <Alert variant="info">Загрузка контактов...</Alert>
        ) : error ? (
          <Alert variant="danger">Ошибка: {error}</Alert>
        ) : contacts.length === 0 ? (
          <Alert variant="secondary">Контактов нет</Alert>
        ) : (
          <Row xxl={4} className="g-4">
            {contacts.map((contact) => (
              <Col key={contact.id}>
                <ContactCard
                  contact={contact}
                  withLink
                  actionSlot={<FavoriteToggleButton contactId={contact.id} />}
                />
              </Col>
            ))}
          </Row>
        )}
      </Col>
    </Row>
  );
});

import React, { memo } from "react";
import { Alert, Col, Row } from "react-bootstrap";

import { ContactCard } from "src/components/ContactCard";
import { FilterForm, FilterFormValues } from "src/components/FilterForm";

import { useAppDispatch, useAppSelector } from "src/shared/lib/storeHooks";

import {
  selectContactsError,
  selectContactsLoading,
  selectFilteredContacts,
} from "src/entities/contact/model/selectors";
import {
  selectAllGroups,
  selectGroupsError,
  selectGroupsLoading,
} from "src/entities/group/model/selectors";

import {
  setContactsFilterGroup,
  setContactsFilterName,
} from "src/features/contacts-filter/model/actions";
import {
  selectContactsFilterGroupId,
  selectContactsFilterName,
} from "src/features/contacts-filter/model/selectors";

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
        ) : (
          <Row xxl={4} className="g-4">
            {contacts.map((contact) => (
              <Col key={contact.id}>
                <ContactCard contact={contact} withLink />
              </Col>
            ))}
          </Row>
        )}
      </Col>
    </Row>
  );
});

import React, { memo } from "react";
import { useParams } from "react-router-dom";
import { Col, Row, Alert } from "react-bootstrap";

import { ContactCard } from "src/components/ContactCard";
import { GroupContactsCard } from "src/components/GroupContactsCard";

import { useAppDispatch, useAppSelector } from "src/shared/lib/storeHooks";

import {
  selectGroupById,
  selectGroupsError,
  selectGroupsLoading,
} from "src/entities/group/model/selectors";
import { loadGroups } from "src/entities/group/model/thunks";

import {
  selectAllContacts,
  selectContactsError,
  selectContactsLoading,
} from "src/entities/contact/model/selectors";
import { loadContacts } from "src/entities/contact/model/thunks";

export const GroupPage = memo(() => {
  const { groupId } = useParams<{ groupId: string }>();
  const dispatch = useAppDispatch();

  const group = useAppSelector((state) =>
    groupId ? selectGroupById(state, groupId) : undefined,
  );

  const contacts = useAppSelector(selectAllContacts);

  const groupsLoading = useAppSelector(selectGroupsLoading);
  const groupsError = useAppSelector(selectGroupsError);

  const contactsLoading = useAppSelector(selectContactsLoading);
  const contactsError = useAppSelector(selectContactsError);

  if (groupsLoading || contactsLoading) {
    return <Alert variant="info">Загрузка данных группы...</Alert>;
  }

  if (groupsError) {
    return (
      <div>
        <Alert variant="danger">Ошибка загрузки групп: {groupsError}</Alert>
        <button type="button" onClick={() => dispatch(loadGroups())}>
          Повторить
        </button>
      </div>
    );
  }

  if (contactsError) {
    return (
      <div>
        <Alert variant="danger">
          Ошибка загрузки контактов: {contactsError}
        </Alert>
        <button type="button" onClick={() => dispatch(loadContacts())}>
          Повторить
        </button>
      </div>
    );
  }

  if (!group) {
    return <Alert variant="warning">Группа не найдена</Alert>;
  }

  const allowedIds = new Set(group.contactIds);
  const groupContacts = contacts.filter((c) => allowedIds.has(c.id));

  return (
    <Row xxl={1} className="g-4">
      <Col>
        <GroupContactsCard groupContacts={group} />
      </Col>

      <Col>
        {groupContacts.length === 0 ? (
          <Alert variant="secondary">В группе нет контактов</Alert>
        ) : (
          <Row xxl={4} className="g-4">
            {groupContacts.map((contact) => (
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

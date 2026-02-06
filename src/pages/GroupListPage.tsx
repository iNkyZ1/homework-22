import React, { memo } from "react";
import { Col, Row, Alert } from "react-bootstrap";

import { GroupContactsCard } from "src/entities/group/ui/GroupContactsCard";

import { useAppDispatch, useAppSelector } from "src/shared/lib/storeHooks";

import {
  selectAllGroups,
  selectGroupsError,
  selectGroupsLoading,
} from "src/entities/group/model/selectors";
import { loadGroups } from "src/entities/group/model/thunks";

export const GroupListPage = memo(() => {
  const dispatch = useAppDispatch();

  const groups = useAppSelector(selectAllGroups);
  const loading = useAppSelector(selectGroupsLoading);
  const error = useAppSelector(selectGroupsError);

  if (loading) {
    return <Alert variant="info">Загрузка групп...</Alert>;
  }

  if (error) {
    return (
      <div>
        <Alert variant="danger">Ошибка загрузки групп: {error}</Alert>
        <button type="button" onClick={() => dispatch(loadGroups())}>
          Повторить
        </button>
      </div>
    );
  }

  return (
    <Row xxl={4} className="g-4">
      {groups.map((group) => (
        <Col key={group.id}>
          <GroupContactsCard groupContacts={group} />
        </Col>
      ))}
    </Row>
  );
});

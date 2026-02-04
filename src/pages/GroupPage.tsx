import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import type { RootState, AppDispatch } from "../app/store/types";

import {
  selectGroupById,
  selectGroupsError,
  selectGroupsLoading,
} from "../entities/group/model/selectors";
import { loadGroups } from "../entities/group/model/thunks";

import {
  selectAllContacts,
  selectContactsError,
  selectContactsLoading,
} from "../entities/contact/model/selectors";
import { loadContacts } from "../entities/contact/model/thunks";

export function GroupPage() {
  const { groupId } = useParams<{ groupId: string }>();
  const dispatch = useDispatch<AppDispatch>();

  const groupsLoading = useSelector((state: RootState) =>
    selectGroupsLoading(state),
  );
  const groupsError = useSelector((state: RootState) =>
    selectGroupsError(state),
  );

  const contactsLoading = useSelector((state: RootState) =>
    selectContactsLoading(state),
  );
  const contactsError = useSelector((state: RootState) =>
    selectContactsError(state),
  );

  const group = useSelector((state: RootState) =>
    groupId ? selectGroupById(state, groupId) : undefined,
  );

  const contacts = useSelector((state: RootState) => selectAllContacts(state));

  if (groupsLoading || contactsLoading) {
    return <p>Загрузка данных группы...</p>;
  }

  if (groupsError) {
    return (
      <div>
        <p>Ошибка загрузки групп: {groupsError}</p>
        <button type="button" onClick={() => dispatch(loadGroups())}>
          Повторить
        </button>
      </div>
    );
  }

  if (contactsError) {
    return (
      <div>
        <p>Ошибка загрузки контактов: {contactsError}</p>
        <button type="button" onClick={() => dispatch(loadContacts())}>
          Повторить
        </button>
      </div>
    );
  }

  if (!group) {
    return <p>Группа не найдена</p>;
  }

  const allowedIds = new Set(group.contactIds);
  const groupContacts = contacts.filter((c) => allowedIds.has(c.id));

  return (
    <div>
      <h2>{group.name}</h2>

      {groupContacts.length === 0 ? (
        <p>В группе нет контактов</p>
      ) : (
        <ul>
          {groupContacts.map((contact) => (
            <li key={contact.id}>
              {contact.name} — {contact.phone}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

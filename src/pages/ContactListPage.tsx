import { useAppDispatch, useAppSelector } from "../shared/lib/storeHooks";

import {
  selectContactsError,
  selectContactsLoading,
  selectFilteredContacts,
} from "../entities/contact/model/selectors";
import { loadContacts } from "../entities/contact/model/thunks";

import { selectAllGroups } from "../entities/group/model/selectors";

import {
  selectContactsFilterGroupId,
  selectContactsFilterName,
} from "../features/contacts-filter/model/selectors";

import {
  resetContactsFilter,
  setContactsFilterGroup,
  setContactsFilterName,
} from "../features/contacts-filter/model/actions";

export function ContactListPage() {
  const dispatch = useAppDispatch();

  const loading = useAppSelector(selectContactsLoading);
  const error = useAppSelector(selectContactsError);

  const contacts = useAppSelector(selectFilteredContacts);
  const groups = useAppSelector(selectAllGroups);

  const filterName = useAppSelector(selectContactsFilterName);
  const filterGroupId = useAppSelector(selectContactsFilterGroupId);

  if (loading) {
    return <p>Загрузка контактов...</p>;
  }

  if (error) {
    return (
      <div>
        <p>Ошибка загрузки контактов: {error}</p>
        <button type="button" onClick={() => dispatch(loadContacts())}>
          Повторить
        </button>
      </div>
    );
  }

  return (
    <div>
      <h2>Все контакты</h2>

      <div
        style={{ display: "grid", gap: 12, maxWidth: 420, marginBottom: 16 }}
      >
        <label>
          Поиск по имени
          <input
            value={filterName}
            onChange={(e) => dispatch(setContactsFilterName(e.target.value))}
            placeholder="Введите имя..."
          />
        </label>

        <label>
          Группа
          <select
            value={filterGroupId ?? ""}
            onChange={(e) =>
              dispatch(setContactsFilterGroup(e.target.value || null))
            }
          >
            <option value="">Все группы</option>
            {groups.map((g) => (
              <option key={g.id} value={g.id}>
                {g.name}
              </option>
            ))}
          </select>
        </label>

        <button type="button" onClick={() => dispatch(resetContactsFilter())}>
          Сбросить фильтры
        </button>
      </div>

      {contacts.length === 0 ? (
        <p>Контакты отсутствуют</p>
      ) : (
        <ul>
          {contacts.map((contact) => (
            <li key={contact.id}>
              {contact.name} — {contact.phone}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

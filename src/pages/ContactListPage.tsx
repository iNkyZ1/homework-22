import { useDispatch, useSelector } from "react-redux";

import { selectFilteredContacts } from "../entities/contact/model/selectors";
import { selectAllGroups } from "../entities/group/model/selectors";

import {
  selectContactsFilterName,
  selectContactsFilterGroupId,
} from "../features/contacts-filter/model/selectors";

import {
  resetContactsFilter,
  setContactsFilterGroup,
  setContactsFilterName,
} from "../features/contacts-filter/model/actions";

import type { RootState, AppDispatch } from "../app/store/types";

export function ContactListPage() {
  const dispatch = useDispatch<AppDispatch>();

  const contacts = useSelector((state: RootState) =>
    selectFilteredContacts(state),
  );
  const groups = useSelector((state: RootState) => selectAllGroups(state));

  const filterName = useSelector((state: RootState) =>
    selectContactsFilterName(state),
  );
  const filterGroupId = useSelector((state: RootState) =>
    selectContactsFilterGroupId(state),
  );

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

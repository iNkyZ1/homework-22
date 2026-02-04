import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectGroupById } from "../entities/group/model/selectors";
import { selectAllContacts } from "../entities/contact/model/selectors";
import type { RootState } from "../app/store/types";

export function GroupPage() {
  const { groupId } = useParams<{ groupId: string }>();

  const group = useSelector((state: RootState) =>
    groupId ? selectGroupById(state, groupId) : undefined,
  );

  const contacts = useSelector((state: RootState) => selectAllContacts(state));

  if (!group) {
    return <p>Группа не найдена</p>;
  }

  const groupContacts = contacts.filter((contact) =>
    group.contactIds.includes(contact.id),
  );

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

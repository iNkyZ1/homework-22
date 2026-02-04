import { useSelector } from "react-redux";

import { selectAllGroups } from "../entities/group/model/selectors";
import type { RootState } from "../app/store/types";

export function GroupListPage() {
  const groups = useSelector((state: RootState) => selectAllGroups(state));

  if (groups.length === 0) {
    return <p>Группы отсутствуют</p>;
  }

  return (
    <ul>
      {groups.map((group) => (
        <li key={group.id}>{group.name}</li>
      ))}
    </ul>
  );
}

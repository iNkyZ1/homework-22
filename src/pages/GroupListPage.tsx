import { useAppDispatch, useAppSelector } from "../shared/lib/storeHooks";

import {
  selectAllGroups,
  selectGroupsError,
  selectGroupsLoading,
} from "../entities/group/model/selectors";
import { loadGroups } from "../entities/group/model/thunks";

export function GroupListPage() {
  const dispatch = useAppDispatch();

  const loading = useAppSelector(selectGroupsLoading);
  const error = useAppSelector(selectGroupsError);
  const groups = useAppSelector(selectAllGroups);

  if (loading) {
    return <p>Загрузка групп...</p>;
  }

  if (error) {
    return (
      <div>
        <p>Ошибка загрузки групп: {error}</p>
        <button type="button" onClick={() => dispatch(loadGroups())}>
          Повторить
        </button>
      </div>
    );
  }

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

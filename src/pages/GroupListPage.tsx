import { useDispatch, useSelector } from "react-redux";

import type { RootState, AppDispatch } from "../app/store/types";

import {
  selectAllGroups,
  selectGroupsError,
  selectGroupsLoading,
} from "../entities/group/model/selectors";
import { loadGroups } from "../entities/group/model/thunks";

export function GroupListPage() {
  const dispatch = useDispatch<AppDispatch>();

  const loading = useSelector((state: RootState) => selectGroupsLoading(state));
  const error = useSelector((state: RootState) => selectGroupsError(state));
  const groups = useSelector((state: RootState) => selectAllGroups(state));

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

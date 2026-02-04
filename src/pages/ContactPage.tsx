import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import type { RootState, AppDispatch } from "../app/store/types";

import {
  selectContactById,
  selectContactsError,
  selectContactsLoading,
} from "../entities/contact/model/selectors";
import { loadContacts } from "../entities/contact/model/thunks";

export function ContactPage() {
  const { contactId } = useParams<{ contactId: string }>();
  const dispatch = useDispatch<AppDispatch>();

  const loading = useSelector((state: RootState) =>
    selectContactsLoading(state),
  );
  const error = useSelector((state: RootState) => selectContactsError(state));

  const contact = useSelector((state: RootState) =>
    contactId ? selectContactById(state, contactId) : undefined,
  );

  if (loading) {
    return <p>Загрузка контакта...</p>;
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

  if (!contact) {
    return <p>Контакт не найден</p>;
  }

  return (
    <div>
      <h2>{contact.name}</h2>
      <p>Телефон: {contact.phone}</p>
    </div>
  );
}

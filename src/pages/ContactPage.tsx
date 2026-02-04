import { useParams } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../shared/lib/storeHooks";

import {
  selectContactById,
  selectContactsError,
  selectContactsLoading,
} from "../entities/contact/model/selectors";
import { loadContacts } from "../entities/contact/model/thunks";

export function ContactPage() {
  const { contactId } = useParams<{ contactId: string }>();
  const dispatch = useAppDispatch();

  const loading = useAppSelector(selectContactsLoading);
  const error = useAppSelector(selectContactsError);

  const contact = useAppSelector((state) =>
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

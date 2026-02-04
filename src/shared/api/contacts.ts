import contactsJson from "../../__data__/contacts.json";

import type { Contact } from "../../entities/contact/model/types";

const DELAY_MS = 500;

export function fetchContacts(): Promise<Contact[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldFail = false;

      if (shouldFail) {
        reject(new Error("Не удалось загрузить контакты"));
        return;
      }

      resolve(contactsJson as Contact[]);
    }, DELAY_MS);
  });
}

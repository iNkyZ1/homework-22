import contactsJson from "./mock/contacts.json";

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

      const mapped: Contact[] = (contactsJson as any[]).map((item) => ({
        id: item.id,
        name: item.name,
        phone: item.phone,
        address: item.address,
        birthday: item.birthday,
        photo: item.photo,
      }));

      resolve(mapped);
    }, DELAY_MS);
  });
}

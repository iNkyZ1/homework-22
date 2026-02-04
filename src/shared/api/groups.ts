import groupsJson from "../../__data__/group-contacts.json";

import type { Group } from "../../entities/group/model/types";

const DELAY_MS = 500;

export function fetchGroups(): Promise<Group[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldFail = false;

      if (shouldFail) {
        reject(new Error("Не удалось загрузить группы"));
        return;
      }

      const mapped: Group[] = (groupsJson as any[]).map((item) => ({
        id: item.id,
        name: item.name,
        description: item.description,
        photo: item.photo,
        contactIds: item.contactIds,
      }));

      resolve(mapped);
    }, DELAY_MS);
  });
}

export const CONTACTS_FILTER_SET_NAME = "contactsFilter/setName";
export const CONTACTS_FILTER_SET_GROUP = "contactsFilter/setGroup";
export const CONTACTS_FILTER_RESET = "contactsFilter/reset";

export const setContactsFilterName = (name: string) => ({
  type: CONTACTS_FILTER_SET_NAME as typeof CONTACTS_FILTER_SET_NAME,
  payload: name,
});

export const setContactsFilterGroup = (groupId: string | null) => ({
  type: CONTACTS_FILTER_SET_GROUP as typeof CONTACTS_FILTER_SET_GROUP,
  payload: groupId,
});

export const resetContactsFilter = () => ({
  type: CONTACTS_FILTER_RESET as typeof CONTACTS_FILTER_RESET,
});

export type ContactsFilterActions =
  | ReturnType<typeof setContactsFilterName>
  | ReturnType<typeof setContactsFilterGroup>
  | ReturnType<typeof resetContactsFilter>;

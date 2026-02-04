export type Contact = {
  id: string;
  name: string;
  phone: string;
  groupId: string;
};

export type ContactsState = {
  data: Contact[];
  loading: boolean;
  error: string | null;
};

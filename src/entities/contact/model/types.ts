export type Contact = {
  id: string;
  name: string;
  phone: string;

  address: string;
  birthday: string;
  photo: string;
};

export type ContactsState = {
  data: Contact[];
  loading: boolean;
  error: string | null;
};

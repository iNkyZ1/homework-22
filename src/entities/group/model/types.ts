export type Group = {
  id: string;
  name: string;
  description: string;
  photo: string;
  contactIds: string[];
};

export type GroupsState = {
  data: Group[];
  loading: boolean;
  error: string | null;
};

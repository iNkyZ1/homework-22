export type Group = {
  id: string;
  name: string;
  contactIds: string[];
};

export type GroupsState = {
  data: Group[];
  loading: boolean;
  error: string | null;
};

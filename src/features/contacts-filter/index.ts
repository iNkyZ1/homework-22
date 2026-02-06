export { FilterForm } from "./ui/FilterForm";
export type { FilterFormValues } from "./ui/FilterForm";

export {
  selectContactsFilterName,
  selectContactsFilterGroupId,
} from "./model/selectors";

export {
  setContactsFilterName,
  setContactsFilterGroup,
  resetContactsFilter,
} from "./model/actions";

export type { ContactsFilterState } from "./model/types";
export { contactsFilterReducer } from "./model/reducer";

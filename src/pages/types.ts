import { State } from "src/shared/types/common";
import { ContactDto } from "src/entities/contact/model/ContactDto";
import { FavoriteContactsDto } from "src/features/favorites/model/FavoriteContactsDto";
import { GroupContactsDto } from "src/entities/group/model/GroupContactsDto";

export interface CommonPageProps {
  contactsState: State<ContactDto[]>;
  favoriteContactsState: State<FavoriteContactsDto>;
  groupContactsState: State<GroupContactsDto[]>;
}

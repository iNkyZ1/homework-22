import { ContactDto } from "../../contact/model/ContactDto";

export interface GroupContactsDto {
  id: string;
  /** Название */
  name: string;
  /** Описание группы */
  description: string;
  /** Фото */
  photo: string;
  contactIds: ContactDto["id"][];
}

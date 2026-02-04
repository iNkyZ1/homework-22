import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";

import {
  ContactListPage,
  ContactPage,
  FavoritesPage,
  GroupListPage,
  GroupPage,
} from "../../pages";

import contactsJson from "../../__data__/contacts.json";
import groupsJson from "../../__data__/group-contacts.json";

import { contactsSuccess } from "../../entities/contact/model/actions";
import { groupsSuccess } from "../../entities/group/model/actions";

import type { AppDispatch } from "../../app/store/types";
import type { Contact } from "../../entities/contact/model/types";
import type { Group } from "../../entities/group/model/types";

export function MainApp() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(contactsSuccess(contactsJson as Contact[]));
    dispatch(groupsSuccess(groupsJson as Group[]));
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<ContactListPage />} />

      <Route path="/contacts">
        <Route index element={<ContactListPage />} />
        <Route path=":contactId" element={<ContactPage />} />
      </Route>

      <Route path="/groups">
        <Route index element={<GroupListPage />} />
        <Route path=":groupId" element={<GroupPage />} />
      </Route>

      <Route path="/favorites" element={<FavoritesPage />} />
    </Routes>
  );
}

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

import type { AppDispatch } from "../../app/store/types";

import { loadContacts } from "../../entities/contact/model/thunks";
import { loadGroups } from "../../entities/group/model/thunks";

export function MainApp() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(loadContacts());
    dispatch(loadGroups());
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

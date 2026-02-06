import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import { useAppDispatch } from "src/shared/lib/storeHooks";

import { Layout } from "src/widgets/layout/ui/Layout";
import {
  ContactListPage,
  ContactPage,
  FavoritesPage,
  GroupListPage,
  GroupPage,
} from "src/pages";

import { loadContacts } from "src/entities/contact/model/thunks";
import { loadGroups } from "src/entities/group/model/thunks";

export function AppRouter() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadContacts());
    dispatch(loadGroups());
  }, [dispatch]);

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<ContactListPage />} />

        <Route path="contacts">
          <Route index element={<ContactListPage />} />
          <Route path=":contactId" element={<ContactPage />} />
        </Route>

        <Route path="groups">
          <Route index element={<GroupListPage />} />
          <Route path=":groupId" element={<GroupPage />} />
        </Route>

        <Route path="favorites" element={<FavoritesPage />} />
      </Route>
    </Routes>
  );
}

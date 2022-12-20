import { Route, Routes } from "react-router-dom";
import KakaoRedirectHandler from "../pages/login/KakaoRedirectHandler";
import AboutPage from "../pages/about";
import DetailPage from "../pages/detail";
import HomePage from "../pages/home";
import Login from "../pages/login/Login";
import Layout from "../components/layout/Layout";
import AdminPage from "../pages/admin";
import AdminItemPage from "../pages/adminItem";

export const pageRoutes = {
  HOME: "/",
  DETAIL: "/detail/:id",
  ABOUT: "/about",
  ADMIN: "/admin",
  ADMIN_ITEMS_CREATE: "/admin/items/create",
  ADMIN_ITEMS_EDIT: "/admin/items/:id/edit",
  LOGIN: "/login",
  KAKAOLOGIN: "/login/kakao",
};

export default function Router() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path={pageRoutes.HOME} element={<HomePage />} />
        <Route path={pageRoutes.DETAIL} element={<DetailPage />} />
        <Route
          path={pageRoutes.ADMIN_ITEMS_CREATE}
          element={<AdminItemPage />}
        />
        <Route path={pageRoutes.ADMIN_ITEMS_EDIT} element={<AdminItemPage />} />
        <Route path={pageRoutes.ABOUT} element={<AboutPage />} />
        <Route path={pageRoutes.ADMIN} element={<AdminPage />} />
        <Route path={pageRoutes.LOGIN} element={<Login />} />
        <Route
          path={pageRoutes.KAKAOLOGIN}
          element={<KakaoRedirectHandler />}
        />
      </Route>
    </Routes>
  );
}

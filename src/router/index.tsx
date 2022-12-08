import { Route, Routes } from "react-router-dom";
import KakaoRedirectHandler from "../pages/login/KakaoRedirectHandler";
import AboutPage from "../pages/about";
import DetailPage from "../pages/detail";
import HomePage from "../pages/home";
import Login from "../pages/login/Login";
import Layout from "../components/layout/Layout";

export const pageRoutes = {
  HOME: "/",
  DETAIL: "/detail",
  ABOUT: "/about",
  LOGIN: "/login",
  KAKAOLOGIN: "/login/kakao",
};

export default function Router() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path={pageRoutes.HOME} element={<HomePage />} />
        <Route path={pageRoutes.DETAIL} element={<DetailPage />} />
        <Route path={pageRoutes.ABOUT} element={<AboutPage />} />
        <Route path={pageRoutes.LOGIN} element={<Login />} />
        <Route
          path={pageRoutes.KAKAOLOGIN}
          element={<KakaoRedirectHandler />}
        />
      </Route>
    </Routes>
  );
}

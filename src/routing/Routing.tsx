import React, { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import RoutingPath from "./RoutingPath";

const HomePage = React.lazy(() => import("../view/HomePage"));
const AboutPage = React.lazy(() => import("../view/AboutPage"));
const AdminPage = React.lazy(() => import("../view/AdminPage"));
const CartPage = React.lazy(() => import("../view/CartPage"));
const LoginPage = React.lazy(() => import("../view/LoginPage"));
const NotFoundPage = React.lazy(() => import("../view/NotFoundPage"));
const OrderPage = React.lazy(() => import("../view/OrderPage"));
const ProfilePage = React.lazy(() => import("../view/ProfilePage"));
const ShopPage = React.lazy(() => import("../view/ShopPage"));
const SignupPage = React.lazy(() => import("../view/SignupPage"));

const RoutePath: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route
          path={RoutingPath.wildcardRoute}
          element={<Navigate to={RoutingPath.notFoundRoute} />}
        />
        <Route path={RoutingPath.homeRoute} element={<HomePage />} />
        <Route path={RoutingPath.shopRoute} element={<ShopPage />} />
        <Route path={RoutingPath.aboutRoute} element={<AboutPage />} />
        <Route path={RoutingPath.cartRoute} element={<CartPage />} />
        <Route path={RoutingPath.orderRoute} element={<OrderPage />} />
        <Route path={RoutingPath.userRoute} element={<ProfilePage />} />
        <Route path={RoutingPath.loginRoute} element={<LoginPage />} />
        <Route path={RoutingPath.signupRoute} element={<SignupPage />} />
        <Route path={RoutingPath.adminRoute} element={<AdminPage />} />
        <Route path={RoutingPath.notFoundRoute} element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default RoutePath;

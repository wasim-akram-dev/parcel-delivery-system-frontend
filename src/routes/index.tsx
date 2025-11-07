import App from "@/App";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { role } from "@/constraints/role";
import AboutPage from "@/pages/About/AboutPage";
import ContactPage from "@/pages/Contact/ContactPage";
import Home from "@/pages/Home/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Unauthorized from "@/pages/Unauthorized";
import type { TRole } from "@/types";
import { generateRoutes } from "@/utils/generateRoutes";
import { withAuth } from "@/utils/withAuth";
import { createBrowserRouter, Navigate } from "react-router";
import { adminSidebarItems } from "./adminSidebarItems";
import { receiverSidebarItems } from "./receiverSidebarItems";
import { senderSidebarItems } from "./senderSidebarItems";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        path: "/",
        Component: Home,
        index: true,
      },
      {
        path: "/about",
        Component: AboutPage,
      },
      {
        path: "/contact",
        Component: ContactPage,
      },
    ],
  },
  {
    path: "/register",
    Component: Register,
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/admin",
    Component: withAuth(DashboardLayout, role.admin as TRole),
    children: [
      { index: true, element: <Navigate to="/admin/view-all-parcels" /> },
      ...generateRoutes(adminSidebarItems),
    ],
  },
  {
    path: "/sender",
    Component: withAuth(DashboardLayout, role.sender as TRole),
    children: [
      { index: true, element: <Navigate to="/sender/view-parcels" /> },
      ...generateRoutes(senderSidebarItems),
    ],
  },
  {
    path: "/receiver",
    Component: withAuth(DashboardLayout, role.receiver as TRole),
    children: [
      {
        index: true,
        element: <Navigate to="/receiver/view-incoming-parcels" />,
      },
      ...generateRoutes(receiverSidebarItems),
    ],
  },
  {
    path: "/unauthorized",
    Component: Unauthorized,
  },
]);

export default router;

import App from "@/App";
import AboutPage from "@/pages/About/AboutPage";
import ContactPage from "@/pages/Contact/ContactPage";
import Home from "@/pages/Home/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import { createBrowserRouter } from "react-router";

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
]);

export default router;

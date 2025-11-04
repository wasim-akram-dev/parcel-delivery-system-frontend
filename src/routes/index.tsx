import App from "@/App";
import AboutPage from "@/pages/About/AboutPage";
import Home from "@/pages/Home/Home";
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
    ],
  },
]);

export default router;

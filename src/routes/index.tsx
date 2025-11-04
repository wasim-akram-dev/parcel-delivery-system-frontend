import App from "@/App";
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
        path: "about",
        element: <h2>About in homepage</h2>,
        // Component: About,
      },
    ],
  },
]);

export default router;

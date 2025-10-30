import App from "@/App";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        path: "about",
        element: <h2>About in homepage</h2>,
        // Component: About,
      },
    ],
  },
]);

export default router;

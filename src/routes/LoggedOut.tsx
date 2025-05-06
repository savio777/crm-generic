import { createBrowserRouter } from "react-router-dom";

import { Login } from "@/pages/Login/Login";

export const LoggedOut = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
]);

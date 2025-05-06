import { createBrowserRouter } from "react-router-dom";

import { Login } from "@/pages/Login/Login";

import { PrivateRoute } from "./PrivateRoute";
import { Dashboard } from "@/pages/Dashboard/Dashboard";

export const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    element: <PrivateRoute />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);

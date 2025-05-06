import { createBrowserRouter } from "react-router-dom";

import { Login } from "@/pages/Login/Login";

import { PrivateRoute } from "./PrivateRoute";

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
        element: <div className="font-bold">Hello world!</div>,
      },
    ],
  },
]);

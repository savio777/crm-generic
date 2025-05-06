import { createBrowserRouter } from "react-router-dom";

export const LoggedIn = createBrowserRouter([
  {
    path: "/",
    element: <div className="font-bold">Hello world!</div>,
  },
]);

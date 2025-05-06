import { Navigate, Outlet } from "react-router-dom";

import { useSession } from "@/store/useSession";

export function PrivateRoute() {
  const { user } = useSession();

  return user ? <Outlet /> : <Navigate to="/" />;
}

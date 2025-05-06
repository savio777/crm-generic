import { RouterProvider } from "react-router-dom";

import { useSession } from "./store/useSession";
import { LoggedIn } from "./routes/LoggedIn";
import { LoggedOut } from "./routes/LoggedOut";

function App() {
  const { user } = useSession();

  return (
    <div className="w-full h-dvh bg-white">
      <RouterProvider router={user ? LoggedIn : LoggedOut} />
    </div>
  );
}

export default App;

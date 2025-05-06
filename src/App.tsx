import { RouterProvider } from "react-router-dom";
import { useSession } from "./store/useSession";
import { LoggedIn } from "./routes/LoggedIn";
import { LoggedOut } from "./routes/LoggedOut";
import { useTranslation } from "react-i18next";

function App() {
  const { user } = useSession();

  const { t } = useTranslation();

  return (
    <div className="w-full h-dvh bg-white">
      {t("welcome")}
      <RouterProvider router={user ? LoggedIn : LoggedOut} />
    </div>
  );
}

export default App;

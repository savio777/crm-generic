import { useTranslation } from "react-i18next";

import { Button } from "@/components/Button";
import { Input } from "@/components/Input";

import { useLogin } from "./useLogin";
import { Navigate } from "react-router-dom";

export function Login() {
  const { t } = useTranslation();

  const { handleSetUserMock, user } = useLogin();

  if (user) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className="w-full h-dvh flex flex-col items-center">
      <div className="flex flex-col w-full h-full items-center justify-center gap-4 max-w-[720px]">
        <h1 className="font-extrabold text-4xl text-gray-600 mb-8">
          {t("welcome")}
        </h1>

        <Input placeholder={t("email")} type="email" />

        <Input placeholder={t("password")} type="password" />

        <Button text={t("login")} onClick={handleSetUserMock} />
      </div>
    </div>
  );
}

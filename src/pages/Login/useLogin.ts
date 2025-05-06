import { useSession } from "@/store/useSession";
import { useCallback } from "react";

export const useLogin = () => {
  const { setUser, user } = useSession();

  const handleSetUserMock = useCallback(() => {
    setUser({
      email: "saviopf22@gmail.com",
      id: "13a73425-9ac5-4f61-9b99-d5829a1a6f68",
      name: "Sávio mock",
    });
  }, [setUser]);

  return { handleSetUserMock, user };
};

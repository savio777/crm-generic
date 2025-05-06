import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type Store = {
  user?: ISession;
  setUser: (dto: ISession) => void;
  logout: () => void;
};

export const useSession = create<Store>()(
  persist(
    (set) => ({
      setUser: (dto) => set(() => ({ user: dto })),
      logout: () => set(() => ({ user: undefined })),
    }),
    { name: "session-crm", storage: createJSONStorage(() => sessionStorage) }
  )
);

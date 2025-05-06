import { create } from "zustand";

type Store = {
  user?: ISession;
  setUser: (dto: ISession) => void;
  logout: () => void;
};

export const useSession = create<Store>()((set) => ({
  setUser: (dto) => set(() => ({ user: dto })),
  logout: () => set(() => ({ user: undefined })),
}));

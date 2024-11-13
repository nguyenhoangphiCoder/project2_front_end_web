import { create } from "zustand";

type ModalState = {
  isAuth: boolean;
  id: number;
};

export interface ModalStore extends ModalState {
  setIsAuth: (open: boolean, id: number) => void;
}

export const useAuthStore = create<ModalStore>((set) => ({
  id: 0,
  isAuth: false,
  setIsAuth: (open, id) => set({ isAuth: open, id }),
}));

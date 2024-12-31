import { create } from "zustand";

type ModalState = {
  id: string;
  modal: boolean;
};

export interface ModalStore extends ModalState {
  setModal: (modal: boolean, id?: string) => void;
}

export const useOrderStore = create<ModalStore>((set) => ({
  id: "",
  modal: false,
  setModal: (open, id) => set({ modal: open, id: id ?? "" }),
}));

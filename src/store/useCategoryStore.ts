import { create } from "zustand";

type ModalState = {
  id: string;
  sheetCreate: boolean;
  sheetUpdate: boolean;
  modalDelete: boolean;
};

export interface ModalStore extends ModalState {
  setSheetCreate: (open: boolean) => void;
  setSheetUpdate: (open: boolean, id?: string) => void;
  setModalDelete: (open: boolean, id?: string) => void;
}

export const useCategoryStore = create<ModalStore>((set) => ({
  id: "",
  sheetCreate: false,
  sheetUpdate: false,
  modalDelete: false,
  setSheetCreate: (open) => set({ sheetCreate: open }),
  setSheetUpdate: (open, id) => set({ sheetUpdate: open, id: id ?? "" }),
  setModalDelete: (open, id) => set({ modalDelete: open, id: id ?? "" }),
}));

import { create } from "zustand";

type IModal = {
    modal: string,
    setModal: (modal: string) => void
}

export const useModal = create<IModal>((set) => ({
    modal: '',
    setModal: (modal) => set({ modal }),
}))
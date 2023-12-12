import { create } from "zustand";

type IModal = {
    modal: JSX.Element | null,
    setModal: (modal: JSX.Element) => void
}

export const useModal = create<IModal>((set) => ({
    modal: null,
    setModal: (modal) => set({ modal }),
}))
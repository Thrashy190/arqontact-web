import { create } from "zustand";

type IModal = {
    modal: string,
    setModal: (modal: string) => void
    removeModal: () => void
}

export const useModal = create<IModal>((set) => ({
    modal: '',
    setModal: (modal) => {
        document.getElementById(modal).classList.remove('translate-y-full');
        document.getElementById(modal).classList.add('translate-y-0');

        set((partial: IModal) => {
            partial.modal = modal;
            return partial;
        })
    },
    removeModal: () => {
        set((partial: IModal) => {
            document.getElementById(partial.modal).classList.remove('translate-y-0');
            document.getElementById(partial.modal).classList.add('translate-y-full');

            partial.modal = '';
            return partial;
        })
    },
}))
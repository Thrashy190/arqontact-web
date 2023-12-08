import { create } from "zustand";

type IApp = {
    location: string,
    setLocation: (location: string) => void
}

export const useApp = create<IApp>((set) => ({
    location: 'dashboard',
    setLocation: (location) => set({ location }),
}))
import { create } from "zustand";
import type { MutableRefObject } from "react";

type IDashboard = {
    mode: string,
    setMode: (mode: string) => void
    filters: MutableRefObject<HTMLDivElement>,
    setFilters: (filters: MutableRefObject<HTMLDivElement>) => void
}

export const useDashboard = create<IDashboard>((set) => ({
    mode: '',
    setMode: (mode) => set({ mode }),
    filters: null,
    setFilters: (filters) => set({ filters }),
}))
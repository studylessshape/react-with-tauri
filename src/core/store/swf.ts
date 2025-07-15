import { create } from "zustand";

export interface SwfState {
    path?: string | String;
    updatePath: (newPath: string | String) => void;
    resetPath: () => void;
}

export const useSwfState = create<SwfState>((set) => ({
    path: undefined,
    updatePath: (newPath: string | String) => set({ path: newPath }),
    resetPath: () => set((state) => ({ path: undefined, ...state }), true),
}));

import { create } from "zustand";

export interface SwfState {
    path?: string | String;
    data?: ArrayBuffer;
    updateData: (newData: ArrayBuffer) => void;
    resetData: () => void;
    updatePath: (newPath: string | String) => void;
    resetPath: () => void;
}

export const useSwfState = create<SwfState>((set) => ({
    data: undefined,
    path: undefined,
    updateData: (newData: ArrayBuffer) => set({ data: newData }),
    resetData: () => set((state) => ({ data: undefined, ...state }), true),
    updatePath: (newPath: string | String) => set({ path: newPath }),
    resetPath: () => set((state) => ({ path: undefined, ...state }), true),
}));

import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
// import type {} from '@redux-devtools/extension' // required for devtools typing

export interface AppState {
    data?: ArrayBuffer;
    updateData: (newData: ArrayBuffer | undefined) => void;
}

export const useStore = create<AppState>((set) => ({
    data: undefined as ArrayBuffer | undefined,
    updateData: (newData: ArrayBuffer | undefined) => set({ data: newData }),
}));


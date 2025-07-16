import { create } from "zustand";

export interface SwfState {
    file?: File;
    recentFiles: File[];
    updateFile: (newPath: File) => void;
    resetFile: () => void;
    removeRecentFile: (file: File) => void;
    clearRecentFile: () => void;
}

export const useSwfState = create<SwfState>((set) => ({
    file: undefined,
    recentFiles: [],
    updateFile: (newFile: File) =>
        set((state) => {
            state.file = newFile;
            if (
                state.recentFiles.findIndex((f) => f.name == newFile.name) == -1
            ) {
                state.recentFiles.push(newFile);
            }
            console.log(newFile);
            return state;
        }),
    resetFile: () => set((state) => ({ file: undefined, ...state }), true),
    removeRecentFile: (file: File) =>
        set((state) => {
            state.recentFiles = state.recentFiles.filter((f) => f != file);
            return state;
        }),
    clearRecentFile: () => set({ recentFiles: [] }),
}));

import { PublicAPI } from "./setup";

export function RufflePlayer() {
    // @ts-ignore
    return window.RufflePlayer as any as PublicAPI;
}

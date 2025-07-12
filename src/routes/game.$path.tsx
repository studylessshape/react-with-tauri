import { createFileRoute, useLoaderData } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { invoke } from "@tauri-apps/api/core";
import { RufflePlayer } from "../core/ruffle";

export const Route = createFileRoute("/game/$path")({
    component: RouteComponent,
    loader: async ({ params }) => {
        return await invoke<number[]>("open_file", { path: params.path });
    },
});

function RouteComponent() {
    const [player, setPlayer] = useState(undefined as HTMLElement | undefined);
    const divRef = useRef(null);
    const loaded = useLoaderData({ from: "/game/$path" });

    useEffect(() => {
        const ruffle = RufflePlayer().newest();
        if (ruffle == null) return;

        const newPlayer = ruffle.createPlayer();
        if (divRef.current != null) {
            const element = divRef.current as any as HTMLDivElement;
            newPlayer.style.width = "100%";
            newPlayer.style.height = "100%";
            if (player === undefined && element.children.length == 0) {
                element.appendChild(newPlayer);
                setPlayer(newPlayer);
                newPlayer.ruffle().load({ data: loaded });
            }
        }
    }, [divRef]);

    return (
        <div
            ref={divRef}
            style={{ width: "100%", height: "100%", display: "flex" }}
        >
        </div>
    );
}

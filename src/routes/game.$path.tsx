import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { convertFileSrc } from "@tauri-apps/api/core";
import { RufflePlayer } from "../core/ruffle";
import { PlayerElement, PlayerV1 } from "../core/ruffle/player";
import { useStore } from "../core/store";

export const Route = createFileRoute("/game/$path")({
    component: RouteComponent,
});

function RouteComponent() {
    const [player, setPlayer] = useState(
        undefined as PlayerElement | undefined,
    );
    const [rufflePlayer, setRufflePlayer] = useState(
        undefined as PlayerV1 | undefined,
    );
    const divRef = useRef(null);

    const { path } = Route.useParams();
    const swfData = useStore((state) => state.data);

    useEffect(() => {
        const ruffle = RufflePlayer().newest();
        if (ruffle == null) return;

        const newPlayer = ruffle.createPlayer();
        if (divRef.current != null) {
            const element = divRef.current as any as HTMLDivElement;
            newPlayer.style.width = "100%";
            newPlayer.style.height = "100%";
            if (
                player === undefined && rufflePlayer == undefined &&
                element.children.length == 0
            ) {
                element.appendChild(newPlayer);
                const newRufflePlayer = newPlayer.ruffle();
                setPlayer(newPlayer);
                setRufflePlayer(newRufflePlayer);
                if (swfData) {
                    newRufflePlayer.load({ data: swfData });
                } else {
                    newRufflePlayer.load(convertFileSrc(path));
                }
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

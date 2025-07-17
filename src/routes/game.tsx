import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { RufflePlayer } from "../core/ruffle";
import { PlayerElement, PlayerV1 } from "../core/ruffle/player";
import { useSwfState } from "../core/store";

export const Route = createFileRoute("/game")({
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
    const file = useSwfState((state) => state.file);
    const navigate = useNavigate();

    useEffect(() => {
        if (!file) {
            navigate({ to: ".." });
            return;
        }

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
                file.arrayBuffer().then((buffs) =>
                    newRufflePlayer.load({ data: buffs })
                );
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

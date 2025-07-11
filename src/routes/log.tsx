import { createFileRoute } from "@tanstack/react-router";
import IconFont from "../components/IconFont";
import { useEffect, useRef, useState } from "react";
import { open } from '@tauri-apps/plugin-dialog';

export const Route = createFileRoute("/log")({
    component: RouteComponent,
    staticData: {
        name: "日志",
        icon: <IconFont icon="icon-history"></IconFont>,
        order: 1,
    },
});

function RouteComponent() {
    const [player, setPlayer] = useState(undefined as HTMLElement | undefined);
    const divRef = useRef(null);
    useEffect(() => {
        const ruffle = window.RufflePlayer.newest();
        const newPlayer = ruffle.createPlayer() as HTMLElement;
        if (divRef.current != null) {
            const element = divRef.current as any as HTMLDivElement;
            newPlayer.style.width = "100%";
            newPlayer.style.height = "100%";
            if (player === undefined && element.children.length == 0) {
                element.appendChild(newPlayer);
                setPlayer(newPlayer);
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

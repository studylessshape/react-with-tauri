import { createFileRoute } from "@tanstack/react-router";
import IconFont from "../components/IconFont";
import { useEffect, useRef, useState } from "react";
import { open } from "@tauri-apps/plugin-dialog";
import { invoke } from "@tauri-apps/api/core";
import { Button, Stack } from "rsuite";

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
    const openFileDivRef = useRef(null);

    useEffect(() => {
        // @ts-ignore
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

    async function openClick() {
        const filePath = await open({
            multiple: false,
            directory: false,
            filters: [{ name: "Flash(*.swf)", extensions: ["swf"] }],
        });
        if (filePath == null) return;

        const loadData = await invoke("open_file", { path: filePath });
        // @ts-ignore
        player.ruffle().load({ data: loadData });

        const openFileDiv = openFileDivRef.current as any as HTMLElement;
        openFileDiv.style.display = "none";
    }

    return (
        <div style={{ width: "100%", height: "100%", display: "flex" }}>
            <Stack
                ref={openFileDivRef}
                style={{ position: "fixed", zIndex: 10000, width: "100%", height: "100%" }}
                alignItems="center"
                justifyContent="center"
            >
                <Button onClick={openClick}>Click To Select file</Button>
            </Stack>
            <div
                ref={divRef}
                style={{ width: "100%", height: "100%", display: "flex" }}
            >
            </div>
        </div>
    );
}

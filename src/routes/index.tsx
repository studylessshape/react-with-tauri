import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Button, Stack } from "rsuite";
import { useSwfState } from "../core/store";
import { ChangeEvent, DragEvent, useRef } from "react";
import { platform } from "@tauri-apps/plugin-os";
import { message } from "@tauri-apps/plugin-dialog";

export const Route = createFileRoute("/")({
    component: RouteComponent,
});

function getFileListFromDropEvent(e: DragEvent) {
    var files: File[] = [];
    for (var i = 0; i < e.dataTransfer.files.length; i++) {
        var f = e.dataTransfer.files[i];
        if (f) files.push(f);
    }
    return files;
}

function RouteComponent() {
    const navigate = useNavigate();
    const path = useSwfState((state) => state.path);
    const setPath = useSwfState((state) => state.updatePath);
    const accept = platform() == "android" ? undefined : ".swf";
    const inputFileRef = useRef(null as HTMLInputElement | null);

    async function enterGame(file: File | undefined) {
        if (file) {
            if (file.name.endsWith(".swf")) {
                if (path) {
                    URL.revokeObjectURL(path.toString());
                }
                setPath(URL.createObjectURL(file));
                navigate({ to: "/game" });
            } else {
                await message("File extension must be swf!", {
                    title: "Open failed",
                    kind: "error",
                });
            }
        }
    }

    async function handleOnDrop(e: DragEvent) {
        e.preventDefault();

        const files = getFileListFromDropEvent(e);
        await enterGame(files[0]);
    }

    async function handleClick() {
        if (inputFileRef.current) {
            const element = inputFileRef.current;
            element.click();
        }
    }

    async function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
        if (e.target.files) {
            await enterGame(e.target.files[0]);
        }
    }

    return (
        <Stack
            style={{ width: "100%", height: "100%", display: "flex" }}
            justifyContent="center"
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleOnDrop}
        >
            <input
                type="file"
                style={{ display: "none" }}
                accept={accept}
                ref={inputFileRef}
                onChange={handleFileChange}
            />
            <Button
                onClick={handleClick}
            >
                Select&ensp;<code>.swf</code>&ensp;File
            </Button>
        </Stack>
    );
}

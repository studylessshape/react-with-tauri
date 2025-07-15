import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Button, Stack } from "rsuite";
import { openPicker } from "../core/open";
import { useSwfState } from "../core/store";
import { DragEvent } from "react";

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
    const setData = useSwfState((state) => state.updateData);
    const setPath = useSwfState((state) => state.updatePath);
    const state = useSwfState();

    async function handleOnDrop(e: DragEvent) {
        e.preventDefault();

        const files = getFileListFromDropEvent(e);

        const file = files[0];
        if (file?.name.endsWith(".swf")) {
            file.arrayBuffer().then((val) => {
                setData(val);
                navigate({ to: "/game" });
            });
        }
    }

    return (
        <Stack
            style={{ width: "100%", height: "100%", display: "flex" }}
            justifyContent="center"
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleOnDrop}
        >
            <Button
                onClick={async () =>
                    await openPicker((picked) => {
                        setPath(picked);
                        navigate({ to: "/game" });
                    })}
            >
                Select&ensp;<code>.swf</code>&ensp;File
            </Button>
        </Stack>
    );
}

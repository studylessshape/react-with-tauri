import { createFileRoute, pick, useNavigate } from "@tanstack/react-router";
import { Button, Stack } from "rsuite";
import { openPicker } from "../core/open";

export const Route = createFileRoute("/picker")({
    component: RouteComponent,
});

function RouteComponent() {
    const navigate = useNavigate();

    return (
        <Stack
            style={{ width: "100%", height: "100%", display: "flex" }}
            justifyContent="center"
        >
            <Button
                onClick={async () =>
                    await openPicker((picked) =>
                        navigate({ to: `/game/${picked}` })
                    )}
            >
                Select&ensp;<code>.swf</code>&ensp;File
            </Button>
        </Stack>
    );
}

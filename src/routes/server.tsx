import { createFileRoute } from "@tanstack/react-router";
import IconFont from "../components/IconFont";

export const Route = createFileRoute("/server")({
    component: RouteComponent,
    staticData: {
        name: "服务器",
        icon: <IconFont icon="icon-hard-drive"></IconFont>,
        order: 0,
    },
});

function RouteComponent() {
    return (
        <></>
    );
}

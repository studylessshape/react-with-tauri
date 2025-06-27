import { HomeFilled } from "@ant-design/icons";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
    component: RouteComponent,
    staticData: {
        name: "Home",
        icon: <HomeFilled></HomeFilled>,
    },
});

function RouteComponent() {
    return <div>Hello "/"!</div>;
}

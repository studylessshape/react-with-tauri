import { UserOutlined } from "@ant-design/icons";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/user")({
    component: RouteComponent,
    staticData: {
        name: "User",
        icon: <UserOutlined></UserOutlined>,
    },
});

function RouteComponent() {
    return <div>Hello "/user"!</div>;
}

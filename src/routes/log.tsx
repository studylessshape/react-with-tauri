import { createFileRoute } from "@tanstack/react-router";
import IconFont from "../components/IconFont";
import { Card } from "antd";

export const Route = createFileRoute("/log")({
    component: RouteComponent,
    staticData: {
        name: "日志",
        icon: <IconFont type="icon-history"></IconFont>,
        order: 1,
    },
});

function RouteComponent() {
    return (
        <Card>
            <div>Hello "/log"!</div>
            <div>Hello "/log"!</div>
            <div>Hello "/log"!</div>
            <div>Hello "/log"!</div>
            <div>Hello "/log"!</div>
            <div>Hello "/log"!</div>
            <div>Hello "/log"!</div>
            <div>Hello "/log"!</div>
            <div>Hello "/log"!</div>
            <div>Hello "/log"!</div>
            <div>Hello "/log"!</div>
            <div>Hello "/log"!</div>
            <div>Hello "/log"!</div>
            <div>Hello "/log"!</div>
            <div>Hello "/log"!</div>
            <div>Hello "/log"!</div>
            <div>Hello "/log"!</div>
            <div>Hello "/log"!</div>
            <div>Hello "/log"!</div>
            <div>Hello "/log"!</div>
            <div>Hello "/log"!</div>
            <div>Hello "/log"!</div>
            <div>Hello "/log"!</div>
            <div>Hello "/log"!</div>
            <div>Hello "/log"!</div>
            <div>Hello "/log"!</div>
            <div>Hello "/log"!</div>
            <div>Hello "/log"!</div>
            <div>Hello "/log"!</div>
            <div>Hello "/log"!</div>
            <div>Hello "/log"!</div>
            <div>Hello "/log"!</div>
            <div>Hello "/log"!</div>
            <div>Hello "/log"!</div>
            <div>Hello "/log"!</div>
            <div>Hello "/log"!</div>
            <div>Hello "/log"!</div>
            <div>Hello "/log"!</div>
            <div>Hello "/log"!</div>
            <div>Hello "/log"!</div>
            <div>Hello "/log"!</div>
            <div>Hello "/log"!</div>
            <div>Hello "/log"!</div>
            <div>Hello "/log"!</div>
            <div>Hello "/log"!</div>
        </Card>
    );
}

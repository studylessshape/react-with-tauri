import { createFileRoute } from "@tanstack/react-router";
import IconFont from "../components/IconFont";


export const Route = createFileRoute("/log")({
    component: RouteComponent,
    staticData: {
        name: "日志",
        icon: <IconFont icon="icon-history"></IconFont>,
        order: 1,
    },
});

function RouteComponent() {
    return (
        <div>
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
        </div>
    );
}

import { createFileRoute } from "@tanstack/react-router";
import IconFont from "../components/IconFont";
import { Flex, Splitter } from "antd";

export const Route = createFileRoute("/server")({
    component: RouteComponent,
    staticData: {
        name: "服务器",
        icon: <IconFont type="icon-hard-drive"></IconFont>,
        order: 0,
    },
});

function RouteComponent() {
    return (
        <Splitter>
            <Splitter.Panel
                defaultSize="20%"
                min="20%"
                max="60%"
                style={{ display: "flex", flexDirection: "column" }}
            >
                <Flex style={{ flexGrow: 1 }}>
                    <div>list</div>
                </Flex>
                <Flex>
                    <div>bottom</div>
                </Flex>
            </Splitter.Panel>
            <Splitter.Panel></Splitter.Panel>
        </Splitter>
    );
}

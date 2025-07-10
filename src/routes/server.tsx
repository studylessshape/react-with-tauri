import { createFileRoute } from "@tanstack/react-router";
import IconFont from "../components/IconFont";
import { Allotment } from "allotment";
import { Divider, IconButton, Input, InputGroup } from "rsuite";
import PlusIcon from "@rsuite/icons/Plus";
import MoreIcon from "@rsuite/icons/More";
import FunnelIcon from "@rsuite/icons/Funnel";

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
        <Allotment>
            <Allotment.Pane minSize={260}>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        height: "100%",
                    }}
                >
                    <div style={{ flex: "1 1 auto" }}>Servers</div>
                    <div
                        style={{
                            display: "flex",
                            borderTop: "solid grey",
                            borderTopWidth: 1,
                            marginBottom: 1
                        }}
                    >
                        <IconButton
                            icon={<PlusIcon />}
                            appearance="link"
                            style={{
                                padding: "5",
                                width: 36,
                                height: 36,
                                flexShrink: 0,
                            }}
                        />
                        <IconButton
                            icon={<IconFont icon="icon-folder-add" />}
                            appearance="link"
                            style={{
                                padding: "5",
                                width: 36,
                                height: 36,
                                flexShrink: 0,
                            }}
                        />
                        <Divider
                            vertical
                            style={{ margin: "0 5px", flexShrink: 0 }}
                        />
                        <InputGroup inside style={{ flex: "1 1 auto" }}>
                            <InputGroup.Addon>
                                <FunnelIcon />
                            </InputGroup.Addon>
                            <Input />
                        </InputGroup>
                        <IconButton
                            icon={<MoreIcon />}
                            appearance="link"
                            style={{
                                padding: "5",
                                width: 36,
                                height: 36,
                                flexShrink: 0,
                            }}
                        />
                    </div>
                </div>
            </Allotment.Pane>
            <div>Right</div>
        </Allotment>
    );
}

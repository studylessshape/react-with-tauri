import GearIcon from "@rsuite/icons/Gear";
import QrcodeIcon from "@rsuite/icons/Qrcode";
import GithubIcon from "../components/icons/Github";
import {
    createRootRoute,
    Outlet,
    Route as RouteType,
    useLocation,
    useNavigate,
    useRouter,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { useMemo } from "react";
import { CustomProvider, IconButton, Stack, Tooltip, Whisper } from "rsuite";
import { Container, Content, Footer, Header, Sidebar } from "rsuite";
import { Nav, Sidenav } from "rsuite";

export const Route = createRootRoute({
    component: RootComponent,
});

function RootComponent() {
    const location = useLocation();
    const navigate = useNavigate();
    if (location.pathname == "/") {
        navigate({ to: "/server" });
        return;
    }
    const router = useRouter();
    const menuItems = useMemo(() => {
        const props = Object.getOwnPropertyNames(router.routesByPath);
        const routes: any = router.routesByPath;
        return props.map((p) => routes[p] as RouteType).sort((a, b) => {
            const aIndex = a.options.staticData?.order;
            const bIndex = b.options.staticData?.order;
            if (aIndex == undefined || bIndex == undefined) {
                return aIndex ?? bIndex ?? 0;
            }
            return aIndex - bIndex;
        }).map((route) => {
            return (
                <Nav.Item
                    key={route.fullPath}
                    eventKey={route.fullPath}
                    icon={route.options.staticData?.icon}
                    onClick={() => {
                        navigate({ to: route.fullPath.toString() });
                    }}
                >
                    {route.options.staticData?.name}
                </Nav.Item>
            );
        });
    }, [router.routesByPath]);

    return (
        <CustomProvider theme="dark">
            <Container
                style={{
                    height: "100vh",
                    width: "100vw",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "row",
                }}
            >
                <Sidebar
                    style={{
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        width: "fit-content",
                        flex: "",
                        borderRightWidth: 2,
                        borderRightColor: "#8080805e",
                        borderRightStyle: "solid",
                    }}
                >
                    <Sidenav
                        expanded={false}
                        style={{ flexGrow: 1 }}
                        appearance="subtle"
                    >
                        <Sidenav.Body>
                            <Nav defaultActiveKey="/server">
                                {menuItems}
                            </Nav>
                        </Sidenav.Body>
                    </Sidenav>
                    <Stack
                        justifyContent="center"
                        direction="column"
                        style={{ marginBottom: 10 }}
                    >
                        <IconButton appearance="subtle" icon={<GearIcon />} />
                        <Whisper
                            placement="top"
                            trigger="hover"
                            speaker={<Tooltip>二维码</Tooltip>}
                        >
                            <IconButton
                                appearance="subtle"
                                icon={<QrcodeIcon />}
                            />
                        </Whisper>
                        <Whisper
                            placement="top"
                            trigger="hover"
                            speaker={<Tooltip>Github</Tooltip>}
                        >
                            <IconButton
                                appearance="subtle"
                                icon={<GithubIcon />}
                            />
                        </Whisper>
                    </Stack>
                </Sidebar>

                <Content style={{ overflow: "auto", flexGrow: 1 }}>
                    <Outlet />
                </Content>
                <TanStackRouterDevtools position="bottom-right" />
            </Container>
        </CustomProvider>
    );
}

import {
    createRootRoute,
    Outlet,
    useLocation,
    useNavigate,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { CustomProvider } from "rsuite";
import { Container, Content } from "rsuite";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import { Menu } from "@tauri-apps/api/menu";
import { useEffect } from "react";
import { openPicker } from "../core/open";

export const Route = createRootRoute({
    component: RootComponent,
    notFoundComponent: (props) => (
        <div>
            <div>Not Found</div>
            <div>{props.data as any}</div>
        </div>
    ),
});

function RootComponent() {
    const location = useLocation();
    const navigate = useNavigate();

    if (location.pathname == "/") {
        navigate({ to: "/picker" });
    }

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
                <OverlayScrollbarsComponent
                    style={{ flexGrow: 1 }}
                    options={{
                        scrollbars: {
                            visibility: "auto",
                            theme: "os-theme-light",
                        },
                    }}
                >
                    <Content>
                        <Outlet />
                    </Content>
                </OverlayScrollbarsComponent>
                <TanStackRouterDevtools position="bottom-right" />
            </Container>
        </CustomProvider>
    );
}

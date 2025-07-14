import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { CustomProvider } from "rsuite";
import { Container, Content } from "rsuite";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";

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
                onDragOver={(e) => e.preventDefault()}
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

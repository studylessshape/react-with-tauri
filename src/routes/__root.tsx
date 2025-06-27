import {
    createRootRoute,
    Outlet,
    Route as RouteType,
    useLocation,
    useNavigate,
    useRouter,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { Flex, Layout, Menu } from "antd";
import { ItemType, MenuItemType } from "antd/es/menu/interface";
import { useMemo } from "react";

const { Sider, Content } = Layout;

export const Route = createRootRoute({
    component: RootComponent,
});

function RootComponent() {
    const location = useLocation();
    const navigate = useNavigate();
    const router = useRouter();
    const menuItems = useMemo(() => {
        const props = Object.getOwnPropertyNames(router.routesByPath);
        const routes: any = router.routesByPath;
        return props.map((p) => routes[p] as RouteType).map((route) => {
            return {
                key: route.fullPath.toString(),
                icon: route.options.staticData?.icon,
                label: route.options.staticData?.name,
                onClick: () => navigate({ to: route.fullPath.toString() }),
            } as ItemType<MenuItemType>;
        });
    }, [router.routesByPath]);

    return (
        <>
            <Flex style={{ height: "100vh", width: "100vw" }}>
                <Layout>
                    <Layout>
                        <Sider collapsible>
                            <Menu
                                theme="dark"
                                selectedKeys={[location.pathname]}
                                items={menuItems}
                            >
                            </Menu>
                        </Sider>
                        <Content style={{ overflow: "auto" }}>
                            <Outlet />
                        </Content>
                    </Layout>
                </Layout>
                <TanStackRouterDevtools position="bottom-right" />
            </Flex>
        </>
    );
}

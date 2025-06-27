import { MoonOutlined, SunFilled, SunOutlined } from "@ant-design/icons";
import {
    createRootRoute,
    Outlet,
    Route as RouteType,
    useLocation,
    useNavigate,
    useRouter,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { useTheme } from "ahooks";
import { ThemeMode } from "ahooks/lib/useTheme";
import {
    App,
    Button,
    ConfigProvider,
    Flex,
    Layout,
    Menu,
    theme as AntdTheme,
} from "antd";
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
    const { theme, themeMode, setThemeMode } = useTheme({
        localStorageKey: "theme",
    });
    const themeIcon = useMemo(() => {
        if (themeMode == ThemeMode.SYSTEM) {
            return <SunFilled></SunFilled>;
        } else {
            return themeMode == ThemeMode.LIGHT
                ? <SunOutlined></SunOutlined>
                : <MoonOutlined></MoonOutlined>;
        }
    }, [themeMode]);
    const themeAligorithm = useMemo(() => {
        if (theme == "dark") {
            return AntdTheme.darkAlgorithm;
        } else {
            return AntdTheme.defaultAlgorithm;
        }
    }, [theme]);

    return (
        <ConfigProvider theme={{ algorithm: themeAligorithm }}>
            <App>
                <Flex style={{ height: "100vh", width: "100vw" }}>
                    <Layout>
                        <Layout>
                            <Sider collapsible theme="light">
                                <Button
                                    type="text"
                                    icon={themeIcon}
                                    onClick={() => {
                                        setThemeMode(
                                            themeMode == ThemeMode.SYSTEM
                                                ? ThemeMode.LIGHT
                                                : themeMode == ThemeMode.LIGHT
                                                ? ThemeMode.DARK
                                                : ThemeMode.SYSTEM,
                                        );
                                    }}
                                >
                                </Button>
                                <Menu
                                    selectedKeys={[location.pathname]}
                                    items={menuItems}
                                />
                            </Sider>
                            <Content style={{ overflow: "auto" }}>
                                <Outlet />
                            </Content>
                        </Layout>
                    </Layout>
                    <TanStackRouterDevtools position="bottom-right" />
                </Flex>
            </App>
        </ConfigProvider>
    );
}

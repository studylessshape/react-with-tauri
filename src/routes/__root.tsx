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
        <ConfigProvider
            theme={{
                components: {
                    Menu: {
                        collapsedWidth: 10,
                        collapsedIconSize: 20,
                    },
                },
                algorithm: themeAligorithm,
            }}
            virtual={true}
        >
            <App>
                <Flex style={{ height: "100vh", width: "100vw" }}>
                    <Layout>
                        <Layout>
                            <Sider collapsed={true} theme="light">
                                <Menu
                                    selectedKeys={[location.pathname]}
                                    items={[
                                        {
                                            key: "..",
                                            icon: themeIcon,
                                            label: themeMode,
                                            onClick: () => {
                                                setThemeMode(
                                                    themeMode ==
                                                            ThemeMode.SYSTEM
                                                        ? ThemeMode.LIGHT
                                                        : themeMode ==
                                                                ThemeMode.LIGHT
                                                        ? ThemeMode.DARK
                                                        : ThemeMode.SYSTEM,
                                                );
                                            },
                                        },
                                        ...menuItems,
                                    ]}
                                />
                            </Sider>
                            <Content
                                style={{
                                    overflow: "auto",
                                    height: "100%",
                                    width: "100%",
                                }}
                            >
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

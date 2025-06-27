import React, { useMemo } from "react";
import ReactDOM from "react-dom/client";
import { App as AntdApp, ConfigProvider, theme as AntdTheme } from "antd";
import "./main.css";

import { createRouter, RouterProvider } from "@tanstack/react-router";

// Import the generated route tree
import { routeTree } from "./routeTree.gen";
import { useTheme } from "ahooks";

// Create a new router instance
const router = createRouter({ routeTree });

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
  interface StaticDataRouteOption {
    name?: String;
    icon?: React.ReactNode;
    order?: number,
  }
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

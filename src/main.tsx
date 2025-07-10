import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import "rsuite/styles/index.less";

import "overlayscrollbars/overlayscrollbars.css";
import "allotment/dist/style.css";

import { createRouter, RouterProvider } from "@tanstack/react-router";

// Import the generated route tree
import { routeTree } from "./routeTree.gen";
import { IconProps } from "@rsuite/icons/esm/Icon";

// Create a new router instance
const router = createRouter({ routeTree });

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
  interface StaticDataRouteOption {
    name?: string | undefined;
    icon?: React.ReactElement<IconProps>;
    order?: number;
  }
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

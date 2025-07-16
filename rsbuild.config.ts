import { pluginReact } from "@rsbuild/plugin-react";
import { pluginLess } from "@rsbuild/plugin-less";
import { defineConfig } from "@rsbuild/core";
import { tanstackRouter } from "@tanstack/router-plugin/rspack";
import path from "node:path";

const host = process.env.TAURI_DEV_HOST;

export default defineConfig({
    plugins: [pluginReact(), pluginLess()],
    tools: {
        rspack: {
            plugins: [
                tanstackRouter({
                    target: "react",
                    autoCodeSplitting: true,
                }),
            ],
            watchOptions: {
                ignored: ["**/src-tauri/**"],
            },
            experiments: {
                asyncWebAssembly: true,
            },
        },
    },
    html: {
        template: "./index.html",
    },
    source: {
        entry: {
            index: "./src/main.tsx",
        },
    },
    server: {
        port: 1420,
        strictPort: true,
        host: host,
    },
    dev: {
        hmr: host != undefined,
        client: host
            ? {
                protocol: "ws",
                host,
                port: 1421,
            }
            : undefined,
        assetPrefix: "/",
    },
    output: {
        copy: [
            {
                from: path.resolve(__dirname, "node_modules/@ruffle-rs/ruffle"),
                to: "ruffle",
            },
        ],
    },
});

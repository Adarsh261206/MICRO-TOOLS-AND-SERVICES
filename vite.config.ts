import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { nitro } from "nitro/vite";

export default defineConfig({
  plugins: [
    tailwindcss(),
    tsConfigPaths({ projects: ["./tsconfig.json"] }),
    tanstackStart({
      pages: [
        "/",
        "/about",
        "/capabilities",
        "/materials",
        "/industries",
        "/facility",
        "/quality",
        "/products",
        "/contact",
        "/privacy",
        "/terms",
      ].map((path) => ({ path })),
      prerender: { enabled: true, autoStaticPathsDiscovery: false },
      // Custom SSR error wrapper (src/server.ts).
      server: { entry: "server" },
      importProtection: {
        behavior: "error",
        client: {
          files: ["**/server/**"],
          specifiers: ["server-only"],
        },
      },
    }),
    // No preset here so Nitro auto-detects Vercel on Vercel builds
    // (outputs .vercel/output). Locally it falls back to node.
    nitro(),
    viteReact(),
  ],
});

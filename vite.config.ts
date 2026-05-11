import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import sitemap from "vite-plugin-sitemap";

export default defineConfig({
  plugins: [
    TanStackRouterVite({ routesDirectory: "./src/routes" }),
    react(),
    tailwindcss(),
    sitemap({ hostname: "https://www.thepitbox.ca" }),
  ],
  server: {
    port: 5173,
  },
});

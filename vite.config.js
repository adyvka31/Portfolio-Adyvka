import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { imagetools } from "vite-imagetools";
import { getAllRoutes } from "./src/data/routesManifest.js";

export default defineConfig({
  plugins: [react(), imagetools()],
  ssgOptions: {
    includedRoutes() {
      return getAllRoutes();
    },
  },
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith(".woff2")) {
            return "assets/fonts/[name][extname]";
          }
          return "assets/[name]-[hash][extname]";
        },
        manualChunks(id) {
          if (id.endsWith(".css") || id.includes(".css?")) return;
          if (!id.includes("node_modules")) return;
          if (id.includes("react-router")) return "router";
          if (
            id.includes("react-dom") ||
            id.includes("/react/") ||
            id.includes("scheduler")
          ) {
            return "react";
          }
          if (id.match(/framer-motion|motion-dom|motion-utils/)) {
            return "motion";
          }
          return "vendor";
        },
      },
    },
  },
});

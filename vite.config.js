import { defineConfig, splitVendorChunkPlugin } from "vite";
import react from "@vitejs/plugin-react";
import { imagetools } from "vite-imagetools";

export default defineConfig({
  plugins: [react(), imagetools()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          framer: ["framer-motion"],
          router: ["react-router-dom", "react-router"],
          "react-vendor": ["react", "react-dom"],
        },
      },
    },
    sourcemap: false,
    target: "es2020",
    cssCodeSplit: true,
    chunkSizeWarningLimit: 500,
  },
  // Preload hints otomatis
  experimental: {
    renderBuiltUrl(filename) {
      return filename;
    },
  },
});

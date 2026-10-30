import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    chunkSizeWarningLimit: 750,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules/three/")) {
            return "three-core";
          }
          if (id.includes("node_modules/@react-three/drei")) {
            return "react-three-drei";
          }
          if (id.includes("node_modules/@react-three/fiber")) {
            return "react-three-fiber";
          }
          if (id.includes("node_modules/gsap/") || id.includes("node_modules/@gsap/")) {
            return "animation-vendor";
          }
        },
      },
    },
  },
});

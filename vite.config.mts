import { defineConfig } from "vite";
import { gadget } from "gadget-server/vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [
    gadget({
      outDir: "dist", // force Gadget plugin to write to root dist
    }),
    react(),
  ],
  optimizeDeps: {
    exclude: ["gadget-server"],
  },
  build: {
    outDir: "dist",   // Vite output goes to root dist folder
    target: "esnext",
    minify: "esbuild",
    rollupOptions: {
      external: ["gadget-server"], // exclude server code
    },
  },
});









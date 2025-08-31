import { defineConfig } from "vite";
import { gadget } from "gadget-server/vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [
    gadget({
      viteOptions: {
        build: {
          outDir: "dist", // ✅ force Vite output to 'dist'
        },
      },
    }),
    react(),
  ],
  optimizeDeps: {
    exclude: ["gadget-server"],
  },
  build: {
    outDir: "dist", // also ensure Vite knows about 'dist'
    target: "esnext",
    minify: "esbuild",
    rollupOptions: {
      external: ["gadget-server"],
    },
  },
});








import { defineConfig } from "vite";
import { gadget } from "gadget-server/vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  plugins: [
    gadget({
      outDir: path.resolve(__dirname, "dist"), // Gadget output folder
    }),
    react(),
  ],

  optimizeDeps: {
    exclude: ["gadget-server"],
  },
  build: {
    outDir: "dist",        // Vite output folder
    emptyOutDir: true,     // Clear old files
    target: "esnext",
    minify: "esbuild",
    rollupOptions: {
      external: ["gadget-server"],
    },
  },
});

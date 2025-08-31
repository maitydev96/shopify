import { defineConfig } from "vite";
import { gadget } from "gadget-server/vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// Unified output folder
const outDir = path.resolve(__dirname, "dist");

export default defineConfig({
  plugins: [
    gadget({ outDir }), // Gadget plugin outputs here
    react(),            // React plugin
  ],
  optimizeDeps: {
    exclude: ["gadget-server"], // Exclude Gadget server from Vite optimization
  },
  build: {
    outDir,               // Vite output folder
    emptyOutDir: true,    // Clear old build files
    target: "esnext",     // Modern JS
    minify: "esbuild",    // Fast minification
    sourcemap: false,     // Set true if you want source maps
    rollupOptions: {
      external: ["gadget-server"], // Don’t bundle Gadget server code
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // Optional: for cleaner imports
    },
  },
});


import { defineConfig } from "vite";
import { gadget } from "gadget-server/vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [
    gadget(),        // integrates Gadget server with Vite
    react(),         // React plugin using SWC for faster builds
  ],
  optimizeDeps: {
    exclude: ["gadget-server"], // do not pre-bundle Gadget server
  },
  build: {
    outDir: "dist",   // Vercel expects this directory for deployment
    target: "esnext", // modern JS output
    minify: "esbuild", // faster minification
    rollupOptions: {
      external: ["gadget-server"], // exclude server code from client bundle
    },
  },
});






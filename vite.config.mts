import { defineConfig } from "vite";
import { gadget } from "gadget-server/vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [
    gadget({ outDir: "dist" }), // ✅ force output folder to 'dist' for Vercel
    react(),
  ],
  optimizeDeps: {
    exclude: ["gadget-server"],
  },
  build: {
    target: "esnext",
    minify: "esbuild",
    rollupOptions: {
      external: ["gadget-server"],
    },
  },
});







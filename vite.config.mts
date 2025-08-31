import { defineConfig } from "vite";
import { gadget } from "gadget-server/vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [gadget(), react()],
  optimizeDeps: {
    exclude: ["gadget-server"],
  },
  build: {
    outDir: "dist", // explicitly set the output folder for deployment
    target: "esnext", // ensures modern JS output
    minify: "esbuild", // use esbuild for faster minification
    rollupOptions: {
      external: ["gadget-server"],
    },
  },
});





import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  plugins: [react()],
  base: "/spirit-weave-essence/",
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/main.tsx"),
      name: "App",
      fileName: "index",
      formats: ["iife"], // 自包含 JS
    },
    rollupOptions: {
      external: [], // React 会被打包进去
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});

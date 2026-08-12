import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 3000, // Optional: keeps the same port as CRA
    open: true, // Optional: opens the browser on start
  },
  build: {
    outDir: "build", // Optional: keeps CRA's 'build' name (Vite default is 'dist')
  },
  test: {
    environment: "jsdom",
    globals: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});

import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === "production" ? "/MCQ_Trainer/" : "/",
  test: {
    environment: "jsdom",
    globals: true,
    css: false,
    testTimeout: 15000,
  },
});

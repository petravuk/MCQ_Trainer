import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/MCQ_Trainer/",
  test: {
    environment: "jsdom",
    globals: true,
    css: false,
    testTimeout: 15000,
  },
});

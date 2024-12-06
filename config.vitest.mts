import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    include: ["src/**/*.test.?(c|m)[jt]s?(x)"],
    typecheck: {
      tsconfig: "./tsconfig.vitest.json",
    },
  },
});

import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  sourcemap: true,
  clean: true,
  minify: true,
  outDir: "lib",
  dts: true,
  format: ["cjs", "esm"],
});

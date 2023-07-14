import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/cli.ts"],
  sourcemap: true,
  clean: true,
  minify: true,
  outDir: "bin",
  dts: true,
  format: ["cjs"],
});

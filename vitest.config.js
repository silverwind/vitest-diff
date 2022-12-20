import {defineConfig} from "vitest/dist/config.js";

export default defineConfig({
  test: {
    include: ["test.js"],
    environment: "node",
    open: false,
    globals: true,
    watch: false,
    outputDiffLines: Infinity,
    outputDiffMaxLines: Infinity,
    outputDiffMaxSize: Infinity,
    outputTruncateLength: Infinity,
  },
});

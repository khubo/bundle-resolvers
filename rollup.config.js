import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";

export default [
  {
    input: "src/handler1.js",
    output: {
      file: "dist/handler.js",
      format: "cjs",
    },
    plugins: [
      nodeResolve({
        resolveOnly: (module) => !module.includes("aws-sdk"),
      }),
      commonjs(),
      json(),
    ],
  },
  {
    input: "src/handler1.js",
    output: {
      file: "dist2/handler.js",
      format: "cjs",
    },
  },
];

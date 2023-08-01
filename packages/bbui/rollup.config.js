import svelte from "rollup-plugin-svelte"
import resolve from "@rollup/plugin-node-resolve"
import commonjs from "@rollup/plugin-commonjs"
import json from "@rollup/plugin-json"
import { terser } from "rollup-plugin-terser"
import postcss from "rollup-plugin-postcss"

export default {
  input: "src/index.js",
  output: {
    sourcemap: true,
    format: "esm",
    file: "dist/bbui.es.js",
  },
  plugins: [
    commonjs(),
    resolve(),
    svelte({
      emitCss: true,
    }),
    postcss(),
    terser(),
    json(),
  ],
}

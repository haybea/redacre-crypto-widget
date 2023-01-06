import image from "@rollup/plugin-image";
import babel from "@rollup/plugin-babel";
import postcss from 'rollup-plugin-postcss'

export default {
  input: "src/index.js",
  output: {
    dir: "build",
    format: "umd",
  },
  plugins: [
    babel({
      presets: ["@babel/preset-react"],
      extensions: [".js", ".ts", ".jsx", ".tsx"],
    }),
    postcss({
      minimize: true,
      extensions: [".css"],
    }),
    image(),
  ],
};

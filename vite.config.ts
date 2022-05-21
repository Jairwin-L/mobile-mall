import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import react from '@vitejs/plugin-react'
import legacyPlugin from "@vitejs/plugin-legacy";
// import { viteExternalsPlugin } from "vite-plugin-externals";
// import externalGlobals from "rollup-plugin-external-globals";
import viteCompression from "vite-plugin-compression";
import path = require("path");
const resolvePath = (dir) => path.join(__dirname, dir);

export default defineConfig({
  plugins: [
    viteCompression(),
    reactRefresh(),
    react(),
    legacyPlugin({
      targets: [
        "Android > 39",
        "Chrome >= 60",
        "Safari >= 10.1",
        "iOS >= 10.3",
        "Firefox >= 54",
        "Edge >= 15",
      ],
    }),
    // viteExternalsPlugin({
    // 	React: "react",
    // 	ReactDom: "react-dom",
    // 	// antd: "antd",
    // }),
  ],
  build: {
		minify: 'terser',
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
  esbuild: {},
  optimizeDeps: {},
  server: {
    host: "dev.jairwin.cn",
    port: 8060,
  },
	preview: {
    port: 8061
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          "@primary_color": "#2598ff",
          "@detail_color": "#2db7f5",
          "@edit_color": "#8354ee",
          "@danger_color": "#ff4d4f",
          "@white": "#fff",
          "@black": "#333",
          "@pink": "#ffc0cb",
          "@divideColor": "#f1f5ff",
          "@textColor": "#999",
          "@themeColor": "#3e71f8",
          "@gray": "#7a7a7a",
          "@defaultFontSize": "16px",
          "@commonFontSize": "14px",
          "@smallFontSize": "12px",
        },
        javascriptEnabled: true,
      },
    },
  },
  resolve: {
    // 自动解析确定的扩展，可以在引入模块时不带扩展
    extensions: [".js", ".jsx", ".json", ".less", ".ts", ".tsx", ".mjs"],
    // 路径别名
    alias: {
      "@": resolvePath("src"),
      "@constants": resolvePath("src/constants"),
      "@components": resolvePath("src/components"),
      "@pages": resolvePath("src/pages"),
      "@helper": resolvePath("src/helper"),
      "@api": resolvePath("src/api"),
      "@/mock": resolvePath("src/mock"),
      "@utils": resolvePath("src/utils"),
      "@css": resolvePath("src/assets/css"),
      "@img": resolvePath("src/assets/img"),
    },
  },
});

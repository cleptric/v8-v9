import { defineConfig } from "vite";
export default defineConfig(({ mode }) => {
  return {
    build: {
      outDir: './build/',
      minify: 'esbuild',
      rollupOptions: {
        input: './main.js',
      },
    },
  }
});

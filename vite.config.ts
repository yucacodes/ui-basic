import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import dts from 'vite-plugin-dts'
import { libInjectCss } from 'vite-plugin-lib-inject-css'
import { extname, relative } from 'path'
import { fileURLToPath } from 'node:url'
import { glob } from 'glob'

const docsConfig = defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: '@lib',
        replacement: fileURLToPath(new URL('./lib/main', import.meta.url)),
      },
    ],
  },
})

const libConfig = defineConfig({
  plugins: [react(), libInjectCss(), dts({ include: ['lib'] })],
  build: {
    copyPublicDir: false,
    lib: {
      entry: './lib/main.ts',
      formats: ['es'],
    },
    rollupOptions: {
      external: ['react', 'react/jsx-runtime'],
      input: Object.fromEntries(
        glob
          .sync('lib/**/*.{ts,tsx}', { ignore: 'lib/vite-env.d.ts' })
          .map((file) => [
            relative('lib', file.slice(0, file.length - extname(file).length)),
            fileURLToPath(new URL(file, import.meta.url)),
          ]),
      ),
      output: {
        assetFileNames: 'assets/[name][extname]',
        entryFileNames: '[name].js',
      },
    },
  },
})

export default process.env.VITE_BUILD_MODE === 'lib'
  ? libConfig
  : docsConfig

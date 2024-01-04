import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import dts from 'vite-plugin-dts'
import { libInjectCss } from 'vite-plugin-lib-inject-css'
import { extname, relative } from 'path'
import { fileURLToPath } from 'node:url'
import { glob } from 'glob'
import { qwikVite } from '@builder.io/qwik/optimizer'

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
  build: {
    rollupOptions: {
      output: {
        manualChunks: (moduleId) => {
          if (
            moduleId.includes('node_modules') &&
            moduleId.includes('react-syntax-highlighter')
          )
            return 'react-syntax-highlighter'
        },
      },
    },
  },
})

const libConfig = defineConfig({
  plugins: [react(), libInjectCss(), dts({ include: ['lib'] })],
  build: {
    copyPublicDir: false,
    lib: {
      entry: './lib/main.react.ts',
      formats: ['es'],
    },
    rollupOptions: {
      external: ['react', 'react/jsx-runtime'],
      input: Object.fromEntries(
        glob
          .sync('lib/**/*.{ts,tsx}', {
            ignore: ['lib/vite-env.d.ts', 'lib/**/*.{qwik.ts,qwik.tsx}'],
          })
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

const libQwikConfig = defineConfig({
  build: {
    target: 'es2020',
    lib: {
      entry: './lib/main.qwik.ts',
      formats: ['es', 'cjs'],
      fileName: (format) => `index.qwik.${format === 'es' ? 'mjs' : 'cjs'}`,
    },
  },
  plugins: [qwikVite()],
})

const exportConfig = (() => {
  switch (process.env.VITE_BUILD_MODE) {
    case 'lib':
      return libConfig
    case 'lib-qwik':
      return libQwikConfig
    default:
      return docsConfig
  }
})()

export default exportConfig

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import dts from 'vite-plugin-dts'
import { libInjectCss } from 'vite-plugin-lib-inject-css'
import { extname, relative } from 'path'
import { fileURLToPath } from 'node:url'
import { glob } from 'glob'
import { qwikVite } from '@builder.io/qwik/optimizer'
import { qwikCity } from '@builder.io/qwik-city/vite'
import tsconfigPaths from 'vite-tsconfig-paths'

const docsConfig = defineConfig(() => {
  return {
    plugins: [qwikCity(), qwikVite(), tsconfigPaths()],
    dev: {
      headers: {
        'Cache-Control': 'public, max-age=0',
      },
    },
    preview: {
      headers: {
        'Cache-Control': 'public, max-age=600',
      },
    },
  }
})

// const docsConfig = defineConfig({
//   plugins: [react()],
//   resolve: {
//     alias: [
//       {
//         find: '@lib',
//         replacement: fileURLToPath(new URL('./lib/main.react', import.meta.url)),
//       },
//     ],
//   },
//   build: {
//     rollupOptions: {
//       output: {
//         manualChunks: (moduleId) => {
//           if (
//             moduleId.includes('node_modules') &&
//             moduleId.includes('react-syntax-highlighter')
//           )
//             return 'react-syntax-highlighter'
//         },
//       },
//     },
//   },
// })

const reactLibConfig = defineConfig({
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
            ignore: ['lib/**/*.{qwik.ts,qwik.tsx}', 'lib/vite-env.d.ts'],
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
  plugins: [
    react(),
    libInjectCss(),
    dts({
      include: ['lib'],
      exclude: ['lib/**/*.{qwik.ts,qwik.tsx}', 'lib/vite-env.d.ts'],
    }),
  ],
})

const libQwikConfig = defineConfig({
  build: {
    target: 'es2020',
    lib: {
      entry: './lib/main.qwik.ts',
      formats: ['es', 'cjs'],
      fileName: (format) => `main.qwik.${format === 'es' ? 'mjs' : 'cjs'}`,
    },
    outDir: './dist',
  },
  plugins: [
    qwikVite(),
    libInjectCss(),
    dts({
      include: ['lib'],
      exclude: ['lib/**/*.{react.ts,react.tsx}', 'lib/vite-env.d.ts'],
      rollupTypes: true,
    }),
  ],
})

const exportConfig = (() => {
  switch (process.env.VITE_BUILD_MODE) {
    case 'lib-react':
      return reactLibConfig
    case 'lib-qwik':
      return libQwikConfig
    default:
      return docsConfig
  }
})()

export default exportConfig

import { build } from 'esbuild';
import { sassPlugin } from 'esbuild-sass-plugin';
import { htmlPlugin } from '@craftamap/esbuild-plugin-html';

const isDev = process.env.NODE_ENV === 'development';

build({
  entryPoints: ['src/main.ts', 'src/preload.ts'],
  bundle: true,
  platform: 'node',
  outdir: './dist',
  external: ['electron', 'electron-reload'],
  watch: isDev,
  minify: !isDev,
  sourcemap: isDev,
});

build({
  entryPoints: ['src/index.tsx'],
  bundle: true,
  metafile: true,
  platform: 'browser',
  outdir: './dist',
  watch: isDev,
  minify: !isDev,
  sourcemap: isDev,
  plugins: [
    sassPlugin(),
    htmlPlugin({
      files: [
        {
          entryPoints: ['src/index.tsx'],
          filename: 'index.html',
          htmlTemplate: 'src/index.html',
        },
      ],
    }),
  ],
});

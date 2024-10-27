import react from '@vitejs/plugin-react-swc';
import TurboConsole from 'unplugin-turbo-console/vite';
import { defineConfig, loadEnv } from 'vite';
import { imagetools } from 'vite-imagetools';
import biomePlugin from 'vite-plugin-biome';
import { faviconsPlugin } from 'vite-plugin-favicons';
import type { Options } from 'vite-plugin-favicons';
import { ViteMinifyPlugin } from 'vite-plugin-minify';
import ogPlugin from 'vite-plugin-open-graph';
import { reactClickToComponent } from 'vite-plugin-react-click-to-component';
import { svgSpritemap } from 'vite-plugin-svg-spritemap';
import { webfontDownload } from 'vite-plugin-webfont-dl';

// https://vitejs.dev/config/
// biome-ignore lint/style/noDefaultExport: <explanation>
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    define: {
      'process.env': env,
    },
    base: env.VITE_BASE_URL || '/',
    publicDir: '/public',
    cacheDir: './node_modules/.cache/.vite',
    server: {
      port: mode === 'development' ? 3000 : 8080,
      strictPort: false,
    },
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      cssMinify: 'lightningcss',
      sourcemap: true,
      manifest: true,
    },
    html: {
      cspNonce: 'VITE_NONCE',
    },
    css: {
      transformer: 'lightningcss',
      devSourcemaps: true,
      // lightningcss: {
      //   minify: true,
      //   sourceMap: true,
      // },
    },
    appType: 'spa',
    plugins: [
      react({
        jsxImportSource: '@emotion/react',
        plugins: [['@swc/plugin-emotion', {}]],
      }),
      ViteMinifyPlugin({}),
      TurboConsole({}),
      reactClickToComponent(),
      biomePlugin({
        mode: 'check',
        files: '.',
        applyFixes: true,
        failOnError: false,
      }),
      webfontDownload(
        [
          'https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap',
        ],
        {
          injectAsStyleTag: true,
          minifyCss: true,
          embedFonts: false,
          async: true,
          cache: true,
          proxy: false,
        },
      ),
      imagetools({
        defaultDirectives: (): URLSearchParams => {
          return new URLSearchParams({
            format: 'avif;webp;jpg',
            quality: '75',
          });
        },
        cache: {
          enabled: true,
          dir: './node_modules/.cache/imagetools',
        },
      }),
      svgSpritemap({
        pattern: 'src/assets/icons/*.svg',
        prefix: '',
        filename: 'spritemap.svg',
        currentColor: false,
        svgo: true,
        emit: false,
      }),
      faviconsPlugin({
        imgSrc: './src/assets/favicons/logo.svg',
        path: '/',
        appName: 'vite-react-ts',
        appShortName: 'vite-react-ts',
        appDescription: 'the starting template of the project',
        developerName: 'Oleksandr Pishta',
        // biome-ignore lint/style/useNamingConvention: <explanation>
        developerURL: 'https://livegp.github.io',
        cacheBustingQueryParam: null,
        dir: 'auto',
        lang: 'en-US',
        background: '#fff',
        // biome-ignore lint/style/useNamingConvention: <explanation>
        theme_color: '#fff',
        appleStatusBarStyle: 'black-translucent',
        display: 'standalone',
        orientation: 'any',
        scope: '/',
        // biome-ignore lint/style/useNamingConvention: <explanation>
        start_url: '/?homescreen=1',
        preferRelatedApplications: false,
        relatedApplications: undefined,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          favicons: true,
          windows: true,
          yandex: false,
        },
        version: '1.0',
        manifestMaskable: true,
        manifestFileName: 'manifest.json',
        failGraciously: false,
      } as Options),
      ogPlugin({
        basic: {
          url: 'https://livegp.github.io/vite-react-ts/',
          siteName: 'vite-react-ts',
          title: 'vite-react-ts',
          description: 'Oleksandr Pishta, Full Stack Developer',
          type: 'image.png',
          determiner: 'auto',
          locale: 'en_US',
          image: {
            url: 'https://livegp.github.io/vite-react-ts/vite.png',
            type: 'image/png',
            width: 900,
            height: 440,
            alt: 'Vite Image',
          },
        },
        twitter: {
          card: 'summary_large_image',
          site: '@live_gp',
          siteId: '118488504',
          creator: '@live_gp',
          creatorId: '118488504',
          description: 'Oleksandr Pishta, Full Stack Developer',
          title: 'vite-react-ts',
          image: 'https://livegp.github.io/vite-react-ts/vite.png',
          imageAlt: 'Vite Image',
        },
        facebook: {
          appId: 100000506117116,
        },
      }),
    ],
  };
});

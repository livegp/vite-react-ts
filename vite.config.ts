import react from '@vitejs/plugin-react-swc';
import TurboConsole from 'unplugin-turbo-console/vite';
import { defineConfig, loadEnv } from 'vite';
import { imagetools } from 'vite-imagetools';
import biomePlugin from 'vite-plugin-biome';
import hashedFaviconsPlugin from 'vite-plugin-hashed-favicons';
import { ViteMinifyPlugin } from 'vite-plugin-minify';
import ogPlugin from 'vite-plugin-open-graph';
import { reactClickToComponent } from 'vite-plugin-react-click-to-component';
import Sitemap from 'vite-plugin-sitemap';
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
    cacheDir: 'node_modules/.cache/.vite',
    server: {
      port: mode === 'development' ? 3000 : 8080,
      strictPort: false,
    },
    build: {
      outDir: 'dist',
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
      Sitemap(),
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
      hashedFaviconsPlugin('./src/assets/icons/react.svg', {
        version: '1.0',
        lang: 'en-US',
        appName: 'vite-react-ts',
        appShortName: 'vite-react-ts',
        appDescription: 'the starting template of the project',
        developerName: 'Oleksandr Pishta',
        // biome-ignore lint/style/useNamingConvention: <explanation>
        developerURL: 'https://livegp.github.io',
        scope: '/',
        // biome-ignore lint/style/useNamingConvention: <explanation>
        start_url: '/?homescreen=1',
        loadManifestWithCredentials: false,
        manifestMaskable: true,
        manifestRelativePaths: false,
        background: '#fff',
        // biome-ignore lint/style/useNamingConvention: <explanation>
        theme_color: '#fff',
        appleStatusBarStyle: 'black-translucent',
        cacheBustingQueryParam: null,
        dir: 'auto',
        display: 'standalone',
        orientation: 'any',
        preferRelatedApplications: false,
        relatedApplications: undefined,
        // biome-ignore lint/style/useNamingConvention: <explanation>
        pixel_art: false,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          favicons: true,
          windows: true,
          yandex: true,
        },
      }),
      ogPlugin({
        basic: {
          title: 'vite-react-ts',
          type: 'image.png',
          image: {
            url: 'https://livegp.github.io/vite-react-ts/vite.png',
            // secureUrl: undefined,
            type: 'image/png',
            width: 900,
            height: 440,
            alt: 'Vite Image',
          },
          url: 'https://livegp.github.io/vite-react-ts/',
          description: 'the starting template of the project',
          determiner: 'auto',
          locale: 'en_US',
          localeAlternate: ['en_US', 'ru_RU'],
          siteName: 'vite-react-ts',
          // video: undefined,
        },
        twitter: {
          card: 'summary_large_image',
          site: '@live_gp',
          siteId: '118488504',
          creator: '@live_gp',
          creatorId: '118488504',
          description: 'the starting template of the project',
          title: 'vite-react-ts',
          image: 'https://livegp.github.io/vite-react-ts/vite.png',
          imageAlt: 'Vite Image',
          // player: undefined,
          // playerWidth: undefined,
          // playerHeight: undefined,
          // playerStream: undefined,
          // app: {
          //   name: {
          //     iphone: undefined,
          //     ipad: undefined,
          //     googleplay: undefined,
          //   },
          //   id: {
          //     iphone: undefined,
          //     ipad: undefined,
          //     googleplay: undefined,
          //   },
          //   url: {
          //     iphone: undefined,
          //     ipad: undefined,
          //     googleplay: undefined,
          //   },
          // },
        },
        facebook: {
          appId: 100000506117116,
        },
      }),
    ],
  };
});

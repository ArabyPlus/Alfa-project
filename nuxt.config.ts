import { fileURLToPath } from 'node:url';
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  ssr: true,
  typescript: {
    shim: false
  },
  nitro: {},
  alias: {
    "@": fileURLToPath(new URL('./', import.meta.url)),
  },
  app: {
    head: {
      title: 'Archo',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Archo - Onepage Multi-Purpose Vuejs Template' },
        { hid: 'keywords', name: 'keywords', content: 'Vue Nuxtjs template archo onepage themeforest' },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Teko:300,400,500,600,700&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Playfair+Display:400,500,600,700,800,900&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700;800;900&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Jost:wght@100;200;300;400;500;600;700;800;900&display=swap",
        },
      ],
      script: [
        { src: "https://kit.fontawesome.com/d8d8f76b04.js" },
        { src: "/js/wow.min.js" },
        { src: "/js/isotope.pkgd.min.js" },
        { src: "/js/pace.min.js" },
        { src: "/js/splitting.min.js" },
        { src: "/js/simpleParallax.min.js" },
        { src: "/js/main.js" }
      ]
    }
  },
  css: ['@/public/assets/css/main.css',
    'swiper/css/bundle',
    '@/styles/modal-video.css',
    '@/styles/globals.css'
  ],
  webpack: {
    extractCSS: true,
    optimization: {
      splitChunks: {
        layouts: true
      }
    }
  },
  modules: [
    '@nuxt/fonts',
    'nuxt-icon',
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    '@nuxtjs/i18n'],
  i18n: {
    lazy: true,
    langDir: "locales",
    strategy:"no_prefix",
    locales: [
      {
        code: 'en-US',
        iso: 'en-US',
        name: 'English',
        file: "en-US.json",
        dir: 'ltr'
      },
      {
        code: 'ar-AR',
        iso: 'ar-AR',
        name: 'Arabic',
        file: "ar-AR.json",
        dir: 'rtl'
      },
    ],
    defaultLocale: 'en-US',

  },
})

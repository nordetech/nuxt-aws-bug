// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    '@nuxt/icon',
    '@nuxt/fonts',
    '@nuxtjs/google-fonts',
    'nuxt-monaco-editor',
    '@vueuse/nuxt',
  ],

  shadcn: {
    prefix: '',
    componentDir: './components/ui',
  },

  build: {
    transpile: [/\@epostbox.*/],
  },
  nitro: {
    esbuild: {
      options: {
        supported: {
          'top-level-await': true,
        },
      },
    },
  },

  icon: {
    collections: ['heroicons'],
  },

  googleFonts: {
    families: {
      Manrope: [400, 500, 600, 700, 800],
      'Fira+Code': [400, 500, 700],
    },
  },
})

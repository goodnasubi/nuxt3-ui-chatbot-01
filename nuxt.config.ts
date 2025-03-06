// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ['@nuxt/ui', '@nuxt/eslint', '@nuxtjs/mdc'],

  css: ['~/assets/css/main.css'],

  future: {
    compatibilityVersion: 4
  },

  compatibilityDate: '2024-11-27',

  vite: {
    optimizeDeps: {
      include: ["debug"],
    },
  },

  runtimeConfig: {
    openaiApiKey: process.env.OPENAI_API_KEY,
  },

})
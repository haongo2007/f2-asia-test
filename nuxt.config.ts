// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image'],
  css: ['~/assets/css/main.css'],
  compatibilityDate: '2025-04-15',
  devtools: { enabled: true },
  ssr: true,
  runtimeConfig: {
    public: {
      apiEndpoint: process.env.NUXT_API_ENDPOINT,
    },
  },
  app: {
    head: {
      title: 'Nuxt', // default fallback title
      titleTemplate: '%s | Yến Market',
      htmlAttrs: {
        lang: 'vi',
      },
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Nuxt 3 Awesome Starter',
        },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/logo-brand-1.png' },
      ]
    }
  }
})
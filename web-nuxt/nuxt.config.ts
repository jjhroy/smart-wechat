// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  devServer: {
    port: 2333,
    host: '127.0.0.1',
  },

  modules: ['@nuxtjs/tailwindcss'],
});

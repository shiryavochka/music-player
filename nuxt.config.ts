// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  plugins: [ '~/plugins/howler.js',
  ],
  modules: [
    '@nuxtjs/svg-sprite',
    '@pinia/nuxt',
  ],
  devtools: { enabled: true },
  components: [
    {
      path: '~/components',
     pathPrefix: false,
    },
  ]
})

import { defineNuxtPlugin } from 'nuxt/app'
import Howler from 'howler';
// export default nuxtApp.use(VueHowler)
export default defineNuxtPlugin(nuxtApp => {
    // Doing something with nuxtApp
nuxtApp.vueApp.config.globalProperties.$howler = Howl;
  })
  
  // ~/plugins/vue-howler.ts
 
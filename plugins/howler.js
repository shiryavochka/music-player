import { defineNuxtPlugin } from 'nuxt/app'
import Howler from 'howler';

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.config.globalProperties.$howler = Howl;
}); 
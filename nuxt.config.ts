// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  imports: {
    autoImport: true,
    addons: {
      vueTemplate: true,
    },
  },
  modules: ["@nuxtjs/tailwindcss", "unplugin-icons/nuxt", "nuxt-svgo"],
});

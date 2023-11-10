// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  imports: {
    autoImport: true,
    addons: {
      vueTemplate: true,
    },
  },
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700",
        },
      ],
    },
  },

  modules: ["@nuxtjs/tailwindcss", "nuxt-icon", "nuxt-svgo", "@vueform/nuxt"],
});

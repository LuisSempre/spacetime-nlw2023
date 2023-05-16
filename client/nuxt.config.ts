// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['~/css/main.css'],
	postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})

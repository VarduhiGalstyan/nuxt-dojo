// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
        title: 'Nuxt Dojo',
        meta: [
            {name: 'description', content: 'Everything about Nuxt 3' }
        ],
        link: [
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?gamily=Material+Icons' }
        ]
    }
  },
  runtimeConfig: {
    currencyKey: process.env.CURRENCY_API_KEY
  }
})

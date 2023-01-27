// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    routeRules: {
        "/*": { swr: 3600 },
        "/api/test": { swr: false },
    },
})

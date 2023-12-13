// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: [
        ['@pinia/nuxt', { autoImports: ['defineStore', 'acceptHMRUpdate']}],
        'nuxt-server-utils',
        '@sidebase/nuxt-auth',
        '@nuxt/ui',
    ],
    imports: {
        dirs: ['stores'],
    },
    ssr: false,
    runtimeConfig: {
        openaiSecret: '',
        mongoURI: '',
        authSecret: '',
        owSecret: '',
        public: {
            apiBase: '',
          }
    },
    css: ['~/assets/global.css'],
    app: {
        baseURL: '/',
        pageTransition: { name: 'page', mode: 'out-in' },
    },
    nitro: {
        plugins: ["~/server/index.ts"],
    },
    auth: {
        baseURL: process.env.AUTH_ORIGIN,
        provider: {
            type: "authjs",
        }
    },
    tailwindcss: {
        cssPath: false,
    },
})

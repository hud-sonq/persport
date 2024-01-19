// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: [
        ['@pinia/nuxt', { autoImports: ['defineStore', 'acceptHMRUpdate']}],
        'nuxt-server-utils',
        '@nuxt/ui',
    ],
    imports: {
        dirs: ['stores'],
    },
    ssr: false,
    runtimeConfig: {
        openaiSecret: '',
        mongoURI: '',
        discordWebhook: '',
        discordToken: '',
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
    tailwindcss: {
        cssPath: false,
    },
})

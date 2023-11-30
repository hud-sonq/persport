// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: [[
        '@pinia/nuxt',
        {
            autoImports: ['defineStore', 'acceptHMRUpdate'],
        },
    ]],
    imports: {
        dirs: ['stores'],
    },
    ssr: false,
    runtimeConfig: {
        apiSecret: '',
        public: {
            ow: '',
        }
    },
    css: ['~/assets/global.css'],
    app: {
        baseURL: '/',
        pageTransition: { name: 'page', mode: 'out-in' },
    },

})

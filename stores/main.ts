import { defineStore } from 'pinia'

export const useMainStore = defineStore({
    id: 'main',
    state: () => ({
        isMobile: false,
    }),
    actions: {
        toggleMobile() {
            this.isMobile = !this.isMobile
        },
    },
})
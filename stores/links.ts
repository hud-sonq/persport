import { defineStore } from 'pinia'

export const enableLinksStore = defineStore({
    id: 'links',
    state: () => ({
        linksEnabled: false,
    }),
    actions: {
        toggleLinks() {
            this.linksEnabled = !this.linksEnabled
        },
    },
})
import { defineStore } from 'pinia'

export const useNavStore = defineStore('nav', {
  state: () => ({
    currentNav: 1,
  }),
  actions: {
    setNav(navNumber) {
      this.currentNav = navNumber
    },
  },
})

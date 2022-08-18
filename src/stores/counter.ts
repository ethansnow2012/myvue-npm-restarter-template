import { defineStore } from 'pinia'

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    value: 0,
  }),
  getters: {
    doubleCount: (state) => state.value * 2,
  },
  actions: {
    increment() {
      this.value++
    },
  },
})

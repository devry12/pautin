import { defineStore } from 'pinia'

interface Error {
  id: string
  message: string
  code?: number
  timestamp: number
}

export const useErrorStore = defineStore('error', {
  state: () => ({
    errors: [] as Error[]
  }),
  actions: {
    addError(error: Omit<Error, 'id' | 'timestamp'>) {
      this.errors.push({
        ...error,
        id: crypto.randomUUID(),
        timestamp: Date.now()
      })
    },
    clearError(id: string) {
      this.errors = this.errors.filter(e => e.id !== id)
    }
  }
})

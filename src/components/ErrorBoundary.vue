<template>
  <slot v-if="!hasError" />
  <div v-else class="error-fallback">
    <h2>Something went wrong</h2>
    <button @click="reset">Try again</button>
  </div>
</template>

<script setup lang="ts">
import { ref, onErrorCaptured } from 'vue'
import { useErrorStore } from '@/stores/error'

const hasError = ref(false)
const errorStore = useErrorStore()

onErrorCaptured((err) => {
  hasError.value = true
  errorStore.addError({
    message: err.message,
    code: 500
  })
  return false
})

const reset = () => {
  hasError.value = false
}
</script>

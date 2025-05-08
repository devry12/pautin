<script setup lang="ts">
import { ref, watch } from 'vue'

const props = defineProps<{
  modelValue: string
}>()

const emit = defineEmits(['update:modelValue'])

const activeTab = ref(props.modelValue)

watch(activeTab, (newVal) => {
  emit('update:modelValue', newVal)
})
</script>

<template>
  <nav class="border-b border-gray-200">
    <div class="flex space-x-8">
      <button
        v-for="tab in ['links', 'urls', 'products']"
        :key="tab"
        @click="activeTab = tab"
        class="whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
        :class="{
          'border-indigo-500 text-indigo-600': activeTab === tab,
          'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300': activeTab !== tab
        }"
      >
        {{ tab.charAt(0).toUpperCase() + tab.slice(1) }}
      </button>
    </div>
  </nav>
</template>

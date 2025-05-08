<script setup lang="ts">
defineProps<{
  link: {
    id: string
    title: string
    url: string
    icon?: string
  }
}>()

const emit = defineEmits(['edit', 'delete'])
</script>

<template>
  <div class="flex items-center justify-between p-4 bg-white rounded-lg shadow">
    <div class="flex items-center space-x-3">
      <div class="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
        <span class="text-indigo-600">{{ link.icon || '🔗' }}</span>
      </div>
      <div>
        <h3 class="font-medium text-gray-900">{{ link.title }}</h3>
        <p class="text-sm text-gray-500 truncate max-w-xs">{{ link.url }}</p>
      </div>
    </div>
    <div class="flex space-x-2">
      <button @click="emit('edit')" class="text-indigo-600 hover:text-indigo-800">
        Edit
      </button>
      <button @click="emit('delete')" class="text-red-600 hover:text-red-800">
        Delete
      </button>
    </div>
  </div>
</template>

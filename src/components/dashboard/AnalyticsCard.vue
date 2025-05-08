<script setup lang="ts">
defineProps<{
  title: string
  value: string | number
  change?: number
  icon: string
  loading?: boolean
}>()
</script>

<template>
  <div 
    class="
      bg-white rounded-xl p-6 shadow-sm
      border border-gray-100
      transition-all duration-200
      hover:shadow-md hover:border-gray-200
      focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2
      group
    "
    tabindex="0"
  >
    <div class="flex items-center justify-between">
      <div class="flex flex-col space-y-1">
        <span class="text-sm font-medium text-gray-500">
          {{ title }}
        </span>
        <template v-if="!loading">
          <span class="text-2xl font-bold text-gray-900">
            {{ value }}
          </span>
        </template>
        <template v-else>
          <div class="h-8 w-24 bg-gray-200 rounded animate-pulse"></div>
        </template>
      </div>
      
      <div 
        v-if="!loading"
        class="
          p-3 rounded-lg
          bg-indigo-50 text-indigo-600
          group-hover:bg-indigo-100
          transition-colors duration-200
        "
      >
        <component :is="icon" class="h-6 w-6" />
      </div>
      <div v-else class="h-12 w-12 bg-gray-200 rounded-full animate-pulse"></div>
    </div>

    <div 
      v-if="change !== undefined && !loading"
      class="mt-4 flex items-center"
      :class="{
        'text-green-600': change >= 0,
        'text-red-600': change < 0
      }"
    >
      <span class="text-sm font-medium">
        {{ change >= 0 ? '↑' : '↓' }} {{ Math.abs(change) }}%
      </span>
      <span class="ml-1 text-sm text-gray-500">
        vs last period
      </span>
    </div>
    <div v-else-if="loading" class="mt-4 h-4 w-full bg-gray-200 rounded animate-pulse"></div>
  </div>
</template>

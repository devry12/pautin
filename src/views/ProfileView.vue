<script setup lang="ts">
import { useStore } from '@/stores'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const store = useStore()
const route = useRoute()
const username = computed(() => route.params.username)

// In a real app, we'd fetch this data based on the username
const profile = computed(() => ({
  username: username.value,
  bio: 'Digital creator sharing my work and products',
  avatar: 'https://i.pravatar.cc/150?img=3'
}))
</script>

<template>
  <div class="max-w-md mx-auto px-4 py-12 sm:px-6 lg:px-8 text-center">
    <img :src="profile.avatar" class="w-24 h-24 rounded-full mx-auto mb-4" />
    <h1 class="text-2xl font-bold text-gray-900">@{{ profile.username }}</h1>
    <p class="text-gray-600 mt-2">{{ profile.bio }}</p>
    
    <div class="mt-8 space-y-3">
      <a 
        v-for="link in store.links" 
        :key="link.id" 
        :href="link.url" 
        class="block px-6 py-3 bg-white rounded-lg shadow hover:shadow-md transition-shadow duration-200 text-gray-800 font-medium"
      >
        {{ link.title }}
      </a>
    </div>
  </div>
</template>

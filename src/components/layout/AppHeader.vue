<script setup lang="ts">
import { useStore } from '@/stores'
import { computed } from 'vue'
import { ArrowLeftOnRectangleIcon, ArrowRightOnRectangleIcon } from '@heroicons/vue/24/outline'

const store = useStore()
const isAuthenticated = computed(() => store.isAuthenticated)
</script>

<template>
  <header class="bg-white shadow-sm">
    <div class="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
      <router-link to="/" class="text-xl font-bold text-indigo-600">LinkHub</router-link>
      <nav class="flex items-center space-x-6">
        <router-link v-if="!isAuthenticated" to="/login" class="flex items-center text-gray-600 hover:text-indigo-600">
          <ArrowRightOnRectangleIcon class="h-5 w-5 mr-1" />
          Login
        </router-link>
        <router-link v-if="!isAuthenticated" to="/register" class="text-gray-600 hover:text-indigo-600">
          Register
        </router-link>
        <router-link v-if="isAuthenticated" to="/dashboard" class="text-gray-600 hover:text-indigo-600">
          Dashboard
        </router-link>
        <button v-if="isAuthenticated" @click="store.logout" class="flex items-center text-gray-600 hover:text-indigo-600">
          <ArrowLeftOnRectangleIcon class="h-5 w-5 mr-1" />
          Logout
        </button>
      </nav>
    </div>
  </header>
</template>

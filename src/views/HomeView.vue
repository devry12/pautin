<script setup lang="ts">
import { useStore } from '@/stores'
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'

const store = useStore()
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <AppHeader />
    
    <main class="flex-grow">
      <div class="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl font-bold text-gray-900 mb-6">
            Your Beautiful Link Hub
          </h1>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Create, manage and share all your important links in one place
          </p>
          
          <div class="mt-10">
            <router-link 
              v-if="!store.isAuthenticated"
              to="/register" 
              class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Get Started
            </router-link>
            <router-link 
              v-else
              to="/dashboard" 
              class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Go to Dashboard
            </router-link>
          </div>
        </div>
      </div>
    </main>
    
    <AppFooter />
  </div>
</template>

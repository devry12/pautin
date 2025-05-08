<script setup lang="ts">
import { ref } from 'vue'
import { useStore } from '@/stores'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const store = useStore()
const router = useRouter()

const login = () => {
  // In a real app, this would call an API
  store.login({
    id: '1',
    username: 'demo',
    email: email.value,
    bio: 'Demo user',
    avatar: 'https://i.pravatar.cc/150?img=3'
  })
  router.push('/dashboard')
}
</script>

<template>
  <div class="max-w-md mx-auto px-4 py-12 sm:px-6 lg:px-8">
    <div class="bg-white p-8 rounded-lg shadow">
      <h1 class="text-2xl font-bold text-gray-900 mb-6">Login to your account</h1>
      
      <form @submit.prevent="login" class="space-y-4">
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
          <input
            v-model="email"
            type="email"
            id="email"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>
        
        <div>
          <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
          <input
            v-model="password"
            type="password"
            id="password"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>
        
        <button
          type="submit"
          class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Login
        </button>
      </form>
      
      <p class="mt-4 text-center text-sm text-gray-600">
        Don't have an account? 
        <router-link to="/register" class="font-medium text-indigo-600 hover:text-indigo-500">
          Register
        </router-link>
      </p>
    </div>
  </div>
</template>

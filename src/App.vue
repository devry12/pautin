<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppHeader from './components/layout/AppHeader.vue'
import AppFooter from './components/layout/AppFooter.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <AppHeader />
    <main class="flex-grow">
      <RouterView />
    </main>
    <AppFooter />
  </div>
</template>

<style>
:root {
  --primary: #6366f1;
  --primary-dark: #4f46e5;
  --secondary: #f43f5e;
  --dark: #1e293b;
  --light: #f8fafc;
}

body {
  @apply bg-gray-50 text-slate-800;
}
</style>

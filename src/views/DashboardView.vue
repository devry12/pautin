<script setup lang="ts">
import { ref } from 'vue'
import DashboardNav from '@/components/dashboard/DashboardNav.vue'
import LinksManager from '@/components/links/LinksManager.vue'
import UrlShortener from '@/components/urls/UrlShortener.vue'
import ProductsManager from '@/components/products/ProductsManager.vue'

const activeTab = ref('links')
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
    <h1 class="text-3xl font-bold text-gray-900 mb-8">Dashboard</h1>
    
    <DashboardNav v-model="activeTab" />
    
    <div class="mt-8">
      <LinksManager v-if="activeTab === 'links'" />
      <UrlShortener v-if="activeTab === 'urls'" />
      <ProductsManager v-if="activeTab === 'products'" />
    </div>
  </div>
</template>

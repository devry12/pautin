<script setup lang="ts">
import AnalyticsCard from './AnalyticsCard.vue'
import {
  ArrowTrendingUpIcon,
  LinkIcon,
  ShoppingCartIcon,
  UsersIcon
} from '@heroicons/vue/24/outline'

const metrics = [
  {
    title: 'Total Links',
    value: '1,248',
    change: 12.5,
    icon: LinkIcon
  },
  {
    title: 'Active Products',
    value: '24',
    change: -2.3,
    icon: ShoppingCartIcon
  },
  {
    title: 'Monthly Visitors',
    value: '8,542',
    change: 18.7,
    icon: UsersIcon
  },
  {
    title: 'Conversion Rate',
    value: '3.2%',
    change: 0.8,
    icon: ArrowTrendingUpIcon
  }
]

const loading = ref(false)
</script>

<template>
  <div class="
    grid grid-cols-1 gap-6
    sm:grid-cols-2
    lg:grid-cols-4
  ">
    <AnalyticsCard
      v-for="(metric, index) in metrics"
      :key="index"
      v-bind="metric"
      :loading="loading"
    />
  </div>
</template>

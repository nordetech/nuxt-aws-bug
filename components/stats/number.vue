<script lang="ts" setup>
defineProps<{
  label: string
  stat: number
  link: string
}>()
</script>

<template>
  <NuxtLink :to="link" class="flex flex-col rounded-md border border-gray-100 bg-white py-2 px-2">
    <h2 class="text-sm font-medium uppercase text-gray-600">{{ label }}</h2>
    <span class="text-xl font-medium">{{ stat }}</span>
  </NuxtLink>
</template>

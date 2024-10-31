<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <thead :class="cn('select-none bg-white [&_tr]:border-b [&_tr]:border-gray-300', props.class)">
    <slot />
  </thead>
</template>

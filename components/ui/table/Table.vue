<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div class="relative h-full w-full flex-1 overflow-y-auto rounded-md border border-gray-300 bg-white shadow-sm">
    <table :class="cn('h-full w-full flex-1 table-fixed overflow-x-auto text-sm', props.class)">
      <slot />
    </table>
  </div>
</template>

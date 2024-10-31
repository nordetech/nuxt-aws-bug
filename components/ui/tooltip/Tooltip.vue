<script setup lang="ts">
import TooltipBase from './TooltipBase.vue'
import TooltipContent from './TooltipContent.vue'
import TooltipTrigger from './TooltipTrigger.vue'

defineProps<{
  text?: string
}>()
</script>

<template>
  <TooltipBase>
    <TooltipTrigger v-bind="$attrs">
      <slot />
    </TooltipTrigger>
    <TooltipContent>
      <slot name="content">
        {{ text }}
      </slot>
    </TooltipContent>
  </TooltipBase>
</template>

<script setup lang="ts">
const props = defineProps({
  label: String,
})
</script>

<template>
  <NuxtLink class="flex items-center gap-3 py-2 px-4 border border-line hover:bg-primary rounded-lg hover:text-light transition duration-200 ease cursor-pointer">
    <span class="text-sm">{{ label }}</span>
  </NuxtLink>
</template>

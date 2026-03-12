<script setup lang="ts">
const props = defineProps({
  label: String,
  icon: String,
})
</script>

<template>
  <NuxtLink class="flex items-center gap-3 py-2 px-6 border border-line hover:bg-primary rounded-lg hover:text-light transition duration-200 ease">
    <Icon :name="icon" size="20"/>
    <span class="text-sm mt-1">{{ label }}</span>
  </NuxtLink>
</template>

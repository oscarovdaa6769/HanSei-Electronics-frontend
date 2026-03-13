<script setup lang="ts">
const props = defineProps({
  type: String,
  icon: String,
})
</script>

<template>
  <NuxtLink class="flex items-center gap-6 py-3 px-6 hover:bg-primary rounded-lg hover:text-light w-[230px] focus:bg-primary focus:text-light transition duration-200 ease cursor-pointer">
    <Icon :name="icon" size="20"/>
    <span class="text-lg">{{ type }}</span>
  </NuxtLink>
</template>

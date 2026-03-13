<script setup lang="ts">
const props = defineProps({
  type: String,
  icon: String,
})
</script>

<template>
  <NuxtLink class="flex items-center gap-6 py-3 px-6 hover:bg-primary rounded-lg hover:text-light w-[270px] focus:bg-primary focus:text-light transition duration-200 ease">
    <Icon :name="icon" size="30"/>
    <span class="text-xl mt-1.5">{{ type }}</span>
  </NuxtLink>
</template>

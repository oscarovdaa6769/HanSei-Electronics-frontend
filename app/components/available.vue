<script setup lang="ts">
const props = defineProps({
  amount: Number,
  type: String,
  color: String,
  period: String
})
</script>

<template>
  <div class="border border-line rounded-lg text-center px-6 py-5">
    <div class="flex flex-col gap-2">
      <h1 class="text-3xl font-black text-primary">{{ amount }}</h1>
      <span class="text-gray-400 text-md">{{ type }}</span>
      <div class="w-full h-2 bg-gray-200 rounded-lg">
        <div :class="['w-[75%] h-2 rounded-lg', color]"></div>
      </div>
      <span class="text-gray-400 text-md">{{ period }}</span>
    </div>
  </div>
</template>

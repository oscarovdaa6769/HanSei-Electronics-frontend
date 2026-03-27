<script setup lang="ts">
const props = defineProps({
  label: String,
  disabled: Boolean
})

const emit = defineEmits(['click'])
</script>

<template>
  <button :disabled="disabled" @click="$emit('click')" class="text-sm flex items-center gap-3 py-2 px-4 border border-line hover:bg-primary rounded-lg hover:text-light transition duration-200 ease cursor-pointer bg-light disabled:hover:bg-light disabled:hover:text-gray-200 disabled:border-gray-100 disabled:text-gray-200">
    {{ label }}
  </button>
</template>

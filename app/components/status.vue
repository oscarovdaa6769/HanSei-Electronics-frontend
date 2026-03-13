<script setup lang="ts">
const props = defineProps ({
    color: String,
    status: String
})
</script>

<template>
    <div :class="['flex items-center justify-center px-2 py-1 rounded-lg', color]">
        {{ status }}
    </div>
</template>
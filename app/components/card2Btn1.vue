<script setup lang="ts">
const props = defineProps({
    icon: String,
})
</script>

<template>
    <button class="bg-blue-500/20 backdrop-blur-md text-primary py-2 rounded-lg w-full flex items-center justify-center cursor-pointer hover:bg-blue-500/30">
        <Icon :name="props.icon" size="20"/>
    </button>
</template>
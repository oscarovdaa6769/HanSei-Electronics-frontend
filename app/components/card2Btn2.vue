<script setup lang="ts">
const props = defineProps({
    icon1: String,
    icon2: String
})
</script>

<template>
    <button class="bg-green-500/20 backdrop-blur-md text-success py-2 rounded-lg w-full flex items-center justify-center cursor-pointer hover:bg-green-500/30">
        <Icon :name="props.icon1" size="20"/>
    </button>
    <button class="bg-red-500/20 backdrop-blur-md text-danger py-2 rounded-lg w-full flex items-center justify-center cursor-pointer hover:bg-red-500/30">
        <Icon :name="props.icon2" size="20"/>
    </button>
</template>


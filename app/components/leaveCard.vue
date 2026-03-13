<script setup lang="ts">
const props = defineProps ({
    type: String,
    icon: String,
    color: String
})
</script>

<template>
    <div class="p-3 bg-light rounded-lg flex flex-col gap-3">
        <div :class="['flex items-center gap-2 px-2 py-1 rounded-lg self-start', color]">
            <Icon :name="props.icon"/>
            <span class="text-sm">{{ type }}</span>
        </div>
        <div class="flex justify-between items-center w-full px-2">
            <div class="flex flex-col justify-between items-center">
                <span class="text-gray-400">From</span>
                <h1 class="">Mar 25, 2026</h1>
            </div>
            <Icon name="solar:alt-arrow-right-line-duotone" size="30"/>
            <div class="flex flex-col justify-between items-center">
                <span class="text-gray-400">To</span>
                <h1 class="">Mar 30, 2026</h1>
            </div>
        </div>
        <div class="flex items-center justify-center bg-blue-500/20 backdrop-blur-md text-primary rounded-lg px-3 py-2">
            <span class="text-md">5 Days</span>
        </div>
    </div>
</template>
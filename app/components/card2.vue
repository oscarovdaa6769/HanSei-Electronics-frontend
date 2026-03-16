<script setup lang="ts">
const props = defineProps({
    shortName: String,
    fullName: String,
    dep: String,
    id: String,
    status: String,
    color: String,
    type: String,
    icon: String,
    color2: String,
    date: String,
    date2: String,
    period: String,
    graph: String,
    status2: String,
})
</script>

<template>
    <div class="bg-gray-100 p-3 rounded-lg border border-line flex flex-col gap-3">
        <div class="flex items-center justify-between">
            <div class="flex items-center gap-3">
                <div class="w-10 h-10 bg-secondary flex items-center justify-center rounded-full text-light">
                    <span class="text-md font-black">{{ shortName }}</span>
                </div>
                <div class="flex flex-col justify-between">
                    <h1 class="text-sm font-semibold">{{ fullName }}</h1>
                    <span class="text-gray-400 text-sm">{{ dep }} | ID: {{ id }}</span>
                </div>
            </div>
            <div :class="['flex items-center justify-center px-2 py-1 rounded-lg', color]">
                {{ status }}
            </div>
        </div>
        <div class="p-3 bg-light rounded-lg flex flex-col gap-3">
            <div :class="['flex items-center gap-2 px-2 py-1 rounded-lg self-start', color2]">
                <Icon :name="props.icon"/>
                <span class="text-sm">{{ type }}</span>
            </div>
            <div class="flex justify-between items-center w-full px-2">
                <div class="flex flex-col justify-between items-center">
                    <span class="text-gray-400">From</span>
                    <h1 class="">{{ date }}</h1>
                </div>
                <Icon name="solar:alt-arrow-right-line-duotone" size="30"/>
                <div class="flex flex-col justify-between items-center">
                    <span class="text-gray-400">To</span>
                    <h1 class="">{{ date2 }}</h1>
                </div>
            </div>
            <div class="flex items-center justify-center bg-blue-500/20 backdrop-blur-md text-primary rounded-lg px-3 py-2">
                <span class="text-md">{{ period }}</span>
            </div>
        </div>
        <div class="p-3 bg-light rounded-lg h-25 overflow-auto">
            <p class=""><Icon name="bxs:quote-alt-left" size="15" class="mr-1"/> {{ graph }}</p>
        </div>
        <div class="w-full h-[1px] bg-line"></div>
        <span class="flex items-center gap-3 text-gray-500"><Icon name="solar:calendar-mark-bold"/>{{ status2 }}</span>
        <div class="flex items-center gap-3">
            <slot name="actions"></slot>
        </div>
    </div>
</template>
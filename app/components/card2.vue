<script setup lang="ts">
import status from '/components/status.vue'
import leaveCard from '/components/leaveCard.vue'
import quote from '/components/quote.vue'

const props = defineProps({
  shortName: String,
  fullName: String,
  dep: String,
  id: String,
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
            <status status="Pending" color="backdrop-blur-md bg-yellow-500/20 text-warning"/>
        </div>
        <leaveCard type="Sick Leave" icon="solar:stethoscope-bold" color="bg-red-500/20 backdrop-blur-md text-danger"/>
        <quote graph="Family vacation to Jeju Island. Need time off for travel and rest."/>
        <div class="w-full h-[1px] bg-line"></div>
        <span class="flex items-center gap-3 text-gray-500"><Icon name="solar:calendar-mark-bold"/> Requested: Mar 10, 2026</span>
        <div class="flex items-center gap-3">
            <button class="bg-green-500/20 backdrop-blur-md text-success py-2 rounded-lg w-full flex items-center justify-center cursor-pointer hover:bg-green-500/30">
                <Icon name="solar:check-circle-bold" size="20"/>
            </button>
            <button class="bg-red-500/20 backdrop-blur-md text-danger py-2 rounded-lg w-full flex items-center justify-center cursor-pointer hover:bg-red-500/30">
                <Icon name="solar:close-circle-bold cursor-pointer hover:bg-" size="20"/>
            </button>
        </div>
    </div>
</template>
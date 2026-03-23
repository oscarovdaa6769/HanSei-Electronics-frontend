<script setup lang="ts">
import baseBtn from '/components/baseBtn.vue'
</script>

<template>
  <div class="flex flex-col gap-6 bg-light border-r border-line h-full px-5 py-10  fixed bottom-0 left-0 border-t w-[250px] z-1000">
    <div class="border-b pb-10 border-line flex items-center justify-center">
      <img src="/assets/images/HanSei Electronics.png" alt="Logo">
    </div>
    <div class="flex flex-col gap-1 border-b border-line pb-5">
      <baseBtn type="Dashboard" icon="solar:home-2-bold" to="/dashboard"/>
      <baseBtn type="Employees" icon="solar:users-group-rounded-bold" to="/employees"/>
      <baseBtn type="Attendance" icon="solar:history-bold" to="/attendance"/>
      <baseBtn type="Shift" icon="solar:clock-circle-bold" to="/shift"/>
      <baseBtn type="Leave Requests" icon="solar:calendar-bold" to="/leave-request"/>
    </div>
    <div class="flex flex-col gap-1">
      <baseBtn type="Reports" icon="solar:chart-2-bold" to="/report"/>
      <baseBtn type="Settings" icon="solar:settings-bold" to="/settings"/>
    </div>
    <div class="flex gap-4 items-center fixed bottom-0 left-0 border-t border-r border-line px-5 py-2 w-[250px] bg-light z-1001">
      <div class="w-13 h-13 rounded-full bg-secondary text-light flex items-center justify-center">
        <NuxtLink to="/profile" class="text-lg font-black">BS</NuxtLink>
      </div>
      <NuxtLink to="/profile" class="text-lg font-bold">Bona Sovena</NuxtLink>
    </div>
  </div>
</template>

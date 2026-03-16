<script setup lang="ts">

</script>

<template>
  <div class="flex flex-col gap-6 border-r border-line rounded-sm p-10">
    <div class="border-b pb-10 border-line flex items-center justify-center">
      <img src="/assets/images/HanSei Electronics.png" alt="Logo">
    </div>
    <div class="flex flex-col gap-3 border-b border-line pb-10">
      <baseBtn type="Dashboard" icon="solar:home-2-bold" to="/"/>
      <baseBtn type="Employees" icon="solar:user-bold" to="/employees"/>
      <baseBtn type="Attendance" icon="solar:history-bold" to="/attendance"/>
      <baseBtn type="Shift" icon="solar:clock-circle-bold"/>
      <baseBtn type="Leave Requests" icon="solar:calendar-bold"/>
    </div>
    <div class="flex flex-col gap-3 border-b border-line pb-10">
      <baseBtn type="Reports" icon="solar:chart-2-bold"/>
      <baseBtn type="Settings" icon="solar:settings-bold" to="/settings"/>
    </div>
    <div class="flex gap-6 items-center">
      <div class="w-15 h-15 rounded-full bg-primary text-light flex items-center justify-center">
        <span class="text-xl font-black">BS</span>
      </div>
      <h1 class="text-xl font-medium">Bona Sovena</h1>
    </div>
  </div>
</template>

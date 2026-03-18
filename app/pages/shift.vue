<template>
  <div class="flex">
    <div class="bg-gray-100 min-h-screen xl:w-full p-10">

      <!-- Page Header -->
      <div class="xl:flex xl:pl-[10px] md:pl-[20px] justify-between xl:pr-[20px]">
        <div>

          <h3 class="text-4xl font-bold text-slate-900 tracking-tight">SHIFT</h3>
          <p class="text-[14px] text-gray-500">Overview → Shift</p>

        </div>
        <div class="flex items-center gap-6 pt-4">
          <span class="text-gray-700 font-medium">Admin</span>
          <span class="text-gray-700 font-mono">{{ currentTime }}</span>
        </div>
      </div>


      <BoxShiftSchedules />
      <BoxEmployeeAssignments />
      

    </div>
  </div>

</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import BoxEmployeeAssignments from '~/components/boxEmployeeAssignments.vue';
import BoxShiftSchedules from '~/components/boxShiftSchedules.vue';

// Clock
const currentTime = ref('')
let clockInterval = null
const updateClock = () => {
  currentTime.value = new Date().toLocaleTimeString('en-US', { hour12: false })
}
onMounted(() => { updateClock(); clockInterval = setInterval(updateClock, 1000) })
onUnmounted(() => clearInterval(clockInterval))


</script>
<template>
  <div class="p-10 w-full flex flex-col gap-9">
    <div class="flex justify-between items-center">
      <div class="flex flex-col gap-3 w-full">
        <h1 class="text-4xl font-black uppercase">Dashboard</h1>
        <span class="text-gray-400">Welcome back, Sovena! Here's what's happening today.</span>
      </div>
      <div class="flex items-center gap-3 w-full">
        <form class="relative w-full max-w-sm">
          <Icon name="solar:magnifer-linear" size="20" class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"/>
          <input type="text" placeholder="Search requests..." class="w-full pl-10 pr-4 py-2 border border-line rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"/>
        </form>
        <secondBtn label="New Request" icon="solar:add-circle-bold"/>
        <Icon name="solar:bell-bold" size="20" class="relative"/>
        <div class="w-5 h-5 rounded-full bg-danger flex items-center justify-center text-light absolute right-7 top-15 text-sm">5</div>
      </div>
    </div>
    <div class="grid grid-cols-4 gap-6">
      <card label="Total Employees" icon="solar:users-group-rounded-bold" :amount="156" iicon="solar:arrow-up-linear" message="+12 this month" note="text-success" color="bg-blue-500/20 backdrop-blur-md text-primary"/>
      <card label="Present Today" icon="solar:user-check-bold" :amount="142" iicon="solar:arrow-up-linear" message="91% attendance" note="text-success" color="bg-green-500/20 backdrop-blur-md text-success"/>
      <card label="On Leave" icon="solar:calendar-mark-bold" :amount="8" iicon="" message="4 pending requests" note="text-gray-400" color="bg-yellow-500/20 backdrop-blur-md text-warning"/>
      <card label="Late Today" icon="solar:clock-circle-bold" :amount="6" iicon="solar:arrow-down-linear" message="-2 from yesterday" note="text-danger" color="bg-red-500/20 backdrop-blue-md text-danger"/>
    </div>
  </div>
  <div class="bg-gray-100 min-h-screen xl:w-full p-10">
    <hr class="mt-3 border-gray-300">


    <!-- Recent Attendance -->
    <div class="xl:flex md:block xl:gap-4 mt-8 xl:pl-[10px] md:pl-[10px] md:pr-[10px] xl:pr-[20px] xl:pb-10 md:pb-10 xl:justify-between">
      <!-- <RecentAttendance /> -->
      <BoxLeaveRequests />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import card from '/components/card.vue'

// Fix: Remove duplicate imports, keep only one of each
import CardDashboard from '/components/cardDashboard.vue';
// import RecentAttendance from '~/components/RecentAttendance.vue';
import BoxLeaveRequests from '~/components/boxLeaveRequests.vue';

const currentTime = ref('');
let clockInterval = null;

const updateClock = () => {
  currentTime.value = new Date().toLocaleTimeString('en-US', { hour12: false });
};

onMounted(() => {
  updateClock();
  clockInterval = setInterval(updateClock, 1000);
});

onUnmounted(() => {
  clearInterval(clockInterval);
});
</script>

<script setup>
import dashboardMiniDashboard from '~/components/dashboardMiniDashboard.vue';
import boxRecentAttendance from '~/components/boxRecentAttendance.vue';
import BoxLeaveRequests from '~/components/boxLeaveRequests.vue';

// const currentTime = ref('');
// let clockInterval = null;

// const updateClock = () => {
//   currentTime.value = new Date().toLocaleTimeString('en-US', { hour12: false });
// };

// onMounted(() => {
//   updateClock();
//   clockInterval = setInterval(updateClock, 1000);
// });

// onUnmounted(() => {
//   clearInterval(clockInterval);
// });
const config = useRuntimeConfig()
const page = ref(1)

const { data: dashboardData, pending, error, refresh } = await useFetch(`${config.public.apiBase}/dashboard`,
  {
    query: computed(() => ({
      page: page.value
    }))
  }
)
</script>

<template>
  <div class="p-10 w-full flex flex-col gap-9">
    <div class="flex justify-between items-center">
      <div class="flex flex-col gap-3 w-full">
        <h1 class="text-4xl font-black uppercase">Dashboard</h1>
        <span class="text-gray-400">Welcome back, Sovena! Here's what's happening today.</span>
      </div>
      <div class="flex items-center justify-end gap-3 w-full">
        <form class="relative w-full max-w-sm">
          <Icon name="solar:magnifer-linear" size="20" class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"/>
          <input type="text" placeholder="Search employees..." class="w-full pl-10 pr-4 py-2 border border-line rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"/>
        </form>
        <div class="relative">
          <Icon name="solar:bell-bold" size="20"/>
          <div class="w-5 h-5 rounded-full bg-danger flex items-center justify-center text-light absolute -right-2 -top-2 text-sm">5</div>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-4 gap-6">
      <dashboardMiniDashboard
        :dashboard="dashboardData"
        :pending="pending"
        :error="error"
        @retry="refresh"
      />
    </div>
    <div class="flex items-start gap-6">
      <boxRecentAttendance />
      <BoxLeaveRequests />
    </div>
  </div>
</template>

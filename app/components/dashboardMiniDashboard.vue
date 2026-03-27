<script setup lang="ts">
const props = defineProps<{
  dashboard: any | null
  pending?: boolean
  error?: any
}>()

interface DashboardMiniDashboard {
  total_employees: number
  new_this_month: number
  present_today: number
  present_percentage: number
  on_leave: number
  pending_leave_requests: number
  late_today: number
  late_yesterday: number
  recent_attendance: number
  pending_leaves: number
}

const totalEmployees = computed(() => props.dashboard?.total_employees ?? 0)
const newThisMonth = computed(() => props.dashboard?.new_this_month ?? '-')
const presentToday = computed(() => props.dashboard?.present_today ?? 0)
const presentPercentage = computed(() => props.dashboard?.present_percentage ?? '-')
const onLeave = computed(() => props.dashboard?.on_leave ?? 0)
const pendingLeaveRequest = computed(() => props.dashboard?.pending_leave_requests ?? '-')
const lateToday = computed(() => props.dashboard?.late_today ?? 0)
const lateYesterday = computed(() => props.dashboard?.late_yesterday ?? '-')
</script>

<template>
    <div class="p-6 border border-line rounded-lg hover:shadow-md hover:translate-y-[-5px] cursor-pointer transition duration-300 ease">
      <div class="flex justify-between items-center pb-6">
        <h1>Total Employees</h1>
        <div class="w-10 h-10 rounded-lg flex items-center justify-center text-2xl bg-blue-500/20 backdrop-blur-md text-primary">
          <Icon name="solar:users-group-rounded-bold"/>
        </div>
      </div>
      <div class="flex flex-col gap-3">
        <h1 class="text-5xl font-black">{{ totalEmployees }}</h1>
        <div class="flex items-center text-gray-400">
          <Icon name="solar:arrow-up-linear" size="18"/>
          <span class="">{{ newThisMonth }} this month</span>
        </div>
      </div>
    </div>

    <div class="p-6 border border-line rounded-lg hover:shadow-md hover:translate-y-[-5px] cursor-pointer transition duration-300 ease">
      <div class="flex justify-between items-center pb-6">
        <h1>Active</h1>
        <div class="w-10 h-10 rounded-lg flex items-center justify-center text-2xl bg-green-500/20 backdrop-blur-md text-success">
          <Icon name="solar:user-check-bold"/>
        </div>
      </div>
      <div class="flex flex-col gap-3">
        <h1 class="text-5xl font-black">{{ presentToday }}</h1>
        <div class="flex items-center text-gray-400">
          <Icon name="" size="20"/>
          <span class="">{{ presentPercentage }}% attendance</span>
        </div>
      </div>
    </div>

    <div class="p-6 border border-line rounded-lg hover:shadow-md hover:translate-y-[-5px] cursor-pointer transition duration-300 ease">
      <div class="flex justify-between items-center pb-6">
        <h1>On leave</h1>
        <div class="w-10 h-10 rounded-lg flex items-center justify-center text-2xl bg-yellow-500/20 backdrop-blur-md text-warning">
          <Icon name="solar:calendar-mark-bold"/>
        </div>
      </div>
      <div class="flex flex-col gap-3">
        <h1 class="text-5xl font-black">{{ onLeave }}</h1>
        <div class="flex items-center text-gray-400">
          <Icon name="" size="20"/>
          <span class="">{{ pendingLeaveRequest }} pending requests</span>
        </div>
      </div>
    </div>

    <div class="p-6 border border-line rounded-lg hover:shadow-md hover:translate-y-[-5px] cursor-pointer transition duration-300 ease">
      <div class="flex justify-between items-center pb-6">
        <h1>Departments</h1>
        <div class="w-10 h-10 rounded-lg flex items-center justify-center text-2xl bg-red-500/20 backdrop-blue-md text-danger">
          <Icon name="solar:clock-circle-bold"/>
        </div>
      </div>
      <div class="flex flex-col gap-3">
        <h1 class="text-5xl font-black">{{ lateToday }}</h1>
        <div class="flex items-center text-gray-400">
          <Icon name="solar:arrow-down-linear" size="18"/>
          <span class="">{{ lateYesterday }} from yesterday</span>
        </div>
      </div>
    </div>

  <div v-if="pending" class="col-span-4 text-center py-12 text-gray-500">
    Loading employee statistics...
  </div>

  <!-- Error State -->
  <div v-else-if="error" class="col-span-4 text-center py-12 text-red-500">
    Failed to load statistics.
    <button @click="$emit('retry')" class="underline hover:text-red-600">Try again</button>
  </div>
</template>

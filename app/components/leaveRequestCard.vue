<script setup lang="ts">
const props = defineProps<{
  leaveRequests: any | null
  pending?: boolean
  error?: any
}>()

interface leaveRequestsCard {
  short_name: string,
  full_name: string,
  dep: string,
  status: string,
  type: string,
  start_date: string,
  end_date: string,
  period: string,
  reason: string,
  requested_at: string,
  icon: string,
  color2: string
}

const shortName = computed(() => props.leaveRequests?.shortname ?? 'NA')
const fullName = computed(() => props.leaveRequests?.fullname ?? 'N/A')
const dep = computed(() => props.leaveRequests?.dep ?? 'N/A')
const status = computed(() => props.leaveRequests?.status ?? 'N/A')
const type = computed(() => props.leaveRequests?.type ?? 'N/A')
const startDate = computed(() => props.leaveRequests?.start_date ?? 'N/A')
const endDate = computed(() => props.leaveRequests?.end_date ?? 'N/A')
const period = computed(() => props.leaveRequests?.period ?? 'N/A')
const reason = computed(() => props.leaveRequests?.reason ?? 'N/A')
const requestedAt = computed(() => props.leaveRequests?.requested_at ?? 'N/A')
// const action = computed(() => props.leaveRequests?.action ?? 'N/A')
const icon = computed(() => props.leaveRequests?.icon ?? 'solar:calendar-mark-bold')

function statusClass(status: string) {
  switch (status) {
    case 'Approved':
      return 'bg-green-500/20 backdrop-blur-md text-success px-4 py-2 rounded-lg'
    case 'Pending':
      return 'bg-yellow-500/20 backdrop-blur-md text-warning px-4 py-2 rounded-lg'
    case 'Rejected':
      return 'bg-red-500/20 backdrop-blur-md text-danger px-4 py-2 rounded-lg'
    default:
      return ''
  }
}

function typeClass(type: string) {
  switch (type) {
    case 'Sick Leave':
      return 'bg-red-500/20 backdrop-blur-md text-danger'
    case 'Vacation Leave':
      return 'bg-yellow-500/20 backdrop-blur-md text-warning'
    case 'Personal Leave':
      return 'bg-blue-500/20 backdrop-blur-md text-primary'
    case 'Maternity Leave':
      return 'bg-pink-500/20 backdrop-blur-md text-pink-500'
    case 'Paternity Leave':
      return 'bg-green-500/20 backdrop-blur-md text-success'
    default:
      return 'bg-gray-500/20 backdrop-blur-md text-gray-600'
  }
}

function iconClass(type: string) {
  switch (type) {
    case 'Sick Leave':
      return 'solar:medical-kit-bold'
    case 'Vacation Leave':
      return 'solar:suitcase-bold'
    case 'Personal Leave':
      return 'solar:user-bold'
    case 'Maternity Leave':
      return 'solar:women-bold'
    case 'Paternity Leave':
      return 'solar:men-bold'
    default:
      return 'solar:calendar-mark-bold'
  }
}
</script>

<template>
  <!-- first card -->
  <div class="bg-gray-100 p-3 rounded-lg border border-line flex flex-col gap-3">
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 bg-secondary flex items-center justify-center rounded-full text-light">
          <span class="text-md font-black">{{ shortName }}</span>
        </div>
        <div class="flex flex-col justify-between">
          <h1 class="text-sm font-semibold">{{ fullName }}</h1>
          <span class="text-gray-400 text-sm">{{ dep }}</span>
        </div>
      </div>
      <div :class="statusClass(status)">
        {{ status }}
      </div>
    </div>
    <div class="p-3 bg-light rounded-lg flex flex-col gap-3">
      <div :class="typeClass(type)" class="flex items-center gap-2 w-max px-3 py-1 rounded-lg">
        <Icon :name="iconClass(type)"/>
        <span class="text-sm">{{ type }}</span>
      </div>
      <div class="flex justify-between items-center w-full px-2">
        <div class="flex flex-col justify-between items-center">
          <span class="text-gray-400">From</span>
          <h1 class="">{{ startDate }}</h1>
        </div>
        <Icon name="solar:alt-arrow-right-line-duotone" size="30"/>
        <div class="flex flex-col justify-between items-center">
          <span class="text-gray-400">To</span>
          <h1 class="">{{ endDate }}</h1>
        </div>
      </div>
      <div class="flex items-center justify-center bg-blue-500/20 backdrop-blur-md text-primary rounded-lg px-3 py-2">
        <span class="text-md">{{ period }}</span>
      </div>
    </div>
    <div class="p-3 bg-light rounded-lg h-25 overflow-auto">
      <p class=""><Icon name="bxs:quote-alt-left" size="15" class="mr-1"/> {{ reason }}</p>
    </div>
    <div class="w-full h-[1px] bg-line"></div>
    <span class="flex items-center gap-3 text-gray-500"><Icon name="solar:calendar-mark-bold"/>{{ requestedAt }}</span>
  </div>
  <!-- second card -->
  <div class="bg-gray-100 p-3 rounded-lg border border-line flex flex-col gap-3">
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 bg-secondary flex items-center justify-center rounded-full text-light">
          <span class="text-md font-black">{{ shortName }}</span>
        </div>
        <div class="flex flex-col justify-between">
          <h1 class="text-sm font-semibold">{{ fullName }}</h1>
          <span class="text-gray-400 text-sm">{{ dep }}</span>
        </div>
      </div>
      <div :class="statusClass(status)">
        {{ status }}
      </div>
    </div>
    <div class="p-3 bg-light rounded-lg flex flex-col gap-3">
      <div :class="typeClass(type)" class="flex items-center gap-2 w-max px-3 py-1 rounded-lg">
        <Icon :name="iconClass(type)"/>
        <span class="text-sm">{{ type }}</span>
      </div>
      <div class="flex justify-between items-center w-full px-2">
        <div class="flex flex-col justify-between items-center">
          <span class="text-gray-400">From</span>
          <h1 class="">{{ startDate }}</h1>
        </div>
        <Icon name="solar:alt-arrow-right-line-duotone" size="30"/>
        <div class="flex flex-col justify-between items-center">
          <span class="text-gray-400">To</span>
          <h1 class="">{{ endDate }}</h1>
        </div>
      </div>
      <div class="flex items-center justify-center bg-blue-500/20 backdrop-blur-md text-primary rounded-lg px-3 py-2">
        <span class="text-md">{{ period }}</span>
      </div>
    </div>
    <div class="p-3 bg-light rounded-lg h-25 overflow-auto">
      <p class=""><Icon name="bxs:quote-alt-left" size="15" class="mr-1"/> {{ reason }}</p>
    </div>
    <div class="w-full h-[1px] bg-line"></div>
    <span class="flex items-center gap-3 text-gray-500"><Icon name="solar:calendar-mark-bold"/>{{ requestedAt }}</span>
  </div>
  <!-- third card -->
  <div class="bg-gray-100 p-3 rounded-lg border border-line flex flex-col gap-3">
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 bg-secondary flex items-center justify-center rounded-full text-light">
          <span class="text-md font-black">{{ shortName }}</span>
        </div>
        <div class="flex flex-col justify-between">
          <h1 class="text-sm font-semibold">{{ fullName }}</h1>
          <span class="text-gray-400 text-sm">{{ dep }}</span>
        </div>
      </div>
      <div :class="statusClass(status)">
        {{ status }}
      </div>
    </div>
    <div class="p-3 bg-light rounded-lg flex flex-col gap-3">
      <div :class="typeClass(type)" class="flex items-center gap-2 w-max px-3 py-1 rounded-lg">
        <Icon :name="iconClass(type)"/>
        <span class="text-sm">{{ type }}</span>
      </div>
      <div class="flex justify-between items-center w-full px-2">
        <div class="flex flex-col justify-between items-center">
          <span class="text-gray-400">From</span>
          <h1 class="">{{ startDate }}</h1>
        </div>
        <Icon name="solar:alt-arrow-right-line-duotone" size="30"/>
        <div class="flex flex-col justify-between items-center">
          <span class="text-gray-400">To</span>
          <h1 class="">{{ endDate }}</h1>
        </div>
      </div>
      <div class="flex items-center justify-center bg-blue-500/20 backdrop-blur-md text-primary rounded-lg px-3 py-2">
        <span class="text-md">{{ period }}</span>
      </div>
    </div>
    <div class="p-3 bg-light rounded-lg h-25 overflow-auto">
      <p class=""><Icon name="bxs:quote-alt-left" size="15" class="mr-1"/> {{ reason }}</p>
    </div>
    <div class="w-full h-[1px] bg-line"></div>
    <span class="flex items-center gap-3 text-gray-500"><Icon name="solar:calendar-mark-bold"/>{{ requestedAt }}</span>
  </div>
</template>

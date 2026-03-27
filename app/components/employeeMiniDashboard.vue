<script setup lang="ts">

const props = defineProps<{
  employees: any | null
  pending?: boolean
  error?: any
}>()

interface EmployeesMiniDashboard {
  total_employees: number,
  active: number,
  on_leave: number,
  departments: number,
  largest_department: string
}

const totalEmployees = computed(() => props.employees?.total_employees ?? 0)
const activeEmployees = computed(() => props.employees?.active ?? 0)
const onLeave = computed(() => props.employees?.on_leave ?? 0)
const departmentsCount = computed(() => props.employees?.departments ?? 0)
const largestDepartment = computed(() => props.employees?.largest_department ?? '-')

const activePercentage = computed(() => {
  if (!totalEmployees.value) return 0
  return ((activeEmployees.value / totalEmployees.value) *100).toFixed(1)
})

const newToday = computed(() => props.employees?.new_today ?? 0)
const newMonth = computed(() => props.employees?.new_this_month ?? 0)

const newEmployeesText = computed(() => {
  if (newToday.value > 0) {
    return `↑ ${newToday.value} new today`
  }
  if (newMonth.value > 0) {
    return `↑ ${newMonth.value} new this month`
  }
  return '-'
})
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
          <span class="">{{ newEmployeesText }}</span>
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
        <h1 class="text-5xl font-black">{{ activeEmployees }}</h1>
        <div class="flex items-center text-gray-400">
          <Icon name="" size="20"/>
          <span class="">{{ activePercentage }}% of total</span>
        </div>
      </div>
    </div>

    <div class="p-6 border border-line rounded-lg hover:shadow-md hover:translate-y-[-5px] cursor-pointer transition duration-300 ease">
      <div class="flex justify-between items-center pb-6">
        <h1>On leave</h1>
        <div class="w-10 h-10 rounded-lg flex items-center justify-center text-2xl bg-yellow-500/20 backdrop-blur-md text-warning">
          <Icon name="solar:clock-circle-bold"/>
        </div>
      </div>
      <div class="flex flex-col gap-3">
        <h1 class="text-5xl font-black">{{ onLeave }}</h1>
        <div class="flex items-center text-gray-400">
          <Icon name="" size="20"/>
          <span class="">-</span>
        </div>
      </div>
    </div>

    <div class="p-6 border border-line rounded-lg hover:shadow-md hover:translate-y-[-5px] cursor-pointer transition duration-300 ease">
      <div class="flex justify-between items-center pb-6">
        <h1>Departments</h1>
        <div class="w-10 h-10 rounded-lg flex items-center justify-center text-2xl bg-purple-500/20 backdrop-blue-md text-purple-500">
          <Icon name="solar:buildings-bold"/>
        </div>
      </div>
      <div class="flex flex-col gap-3">
        <h1 class="text-5xl font-black">{{ departmentsCount }}</h1>
        <div class="flex items-center text-gray-400">
          <Icon name="" size="20"/>
          <span class="">{{ largestDepartment }} largest</span>
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

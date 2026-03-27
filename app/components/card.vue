<script setup lang="ts">
const props = defineProps({
  label: String,
  icon: String,
  message: String,
  iicon: String,
  color: String,
  note: String,
})

// defineProps<{
//   employees: Employees | null
//   pending?: boolean
//   error?: any
// }>()

// interface Employees {
//   total_employees: number,
//   active: number,
//   on_leave: number,
//   departments: number,
//   largest_department: string
// }

const totalEmployees = computed(() => employees.value?.total_employees ?? 0)
const activeEmployees = computed(() => employees.value?.active ?? 0)
const onLeave = computed(() => employees.value?.on_leave ?? 0)
const departmentsCount = computed(() => employees.value?.departments ?? 0)
const largestDepartment = computed(() => employees.value?.largest_department ?? 'N/A')

const activePercentage = computed(() => {
  if (!totalEmployees.value) return 0
  return ((activeEmployees.value / totalEmployees.value) *100).toFixed(1)
})
</script>

<template>
  <div class="p-6 border border-line rounded-lg hover:shadow-md hover:translate-y-[-5px] cursor-pointer transition duration-300 ease">
    <div class="flex justify-between items-center pb-6">
      <h1>{{ label }}</h1>
      <div :class="['w-10 h-10 rounded-lg flex items-center justify-center text-2xl', color]">
        <Icon :name="props.icon"/>
      </div>
    </div>
    <div class="flex flex-col gap-3">
      <h1 class="text-5xl font-black">{{ amount }}</h1>
      <div :class="['flex items-center', note]">
        <Icon :name="props.iicon" size="20"/>
        <span class="">{{ message }}</span>
      </div>
    </div>
  </div>
</template>

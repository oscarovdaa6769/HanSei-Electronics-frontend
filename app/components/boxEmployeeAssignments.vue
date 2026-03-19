<template>
  <div class="border border-line rounded-lg overflow-hidden">
    <div class="flex items-center justify-between w-full p-5">
      <span class="text-xl font-black">Employee Assignments</span>
    </div>
    <div class="overflow-x-auto bg-white">
      <table class="w-full text-left">
        <thead class="bg-gray-100 text-gray-400">
          <tr>
            <td class="px-6 py-5">Employee</td>
            <td class="px-6 py-5">Current Shift</td>
            <td class="px-6 py-5">Department</td>
            <td class="px-6 py-5">Action</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="emp in employees" :key="emp.id" class="border-t border-line">
            <td class="px-6 py-5">{{ emp.employee }}</td>
            <td class="px-6 py-5">{{ emp.current }}</td>
            <td class="px-6 py-5">{{ emp.department }}</td>
            <td class="px-6 py-5">
              <span class="bg-red-500/20 backdrop-blur-md text-danger px-4 py-2 rounded-lg cursor-pointer">
                {{ emp.action }}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script setup>
// Employees
const employees = ref([
  { id: 1, employee: 'Alice Johnson', current: 'Morning Shift',   department: 'Engineering', action: 'Reassign' },
  { id: 2, employee: 'Bob Smith',     current: 'Morning Shift',   department: 'HR',          action: 'Reassign' },
  { id: 3, employee: 'Carol White',   current: 'Afternoon Shift', department: 'Finance',     action: 'Reassign' },
  { id: 4, employee: 'David Lee',     current: 'Morning Shift',   department: 'Sales',       action: 'Reassign' },
  { id: 5, employee: 'Emma Davis',    current: 'Night Shift',     department: 'Operations',  action: 'Reassign' },
])

</script>

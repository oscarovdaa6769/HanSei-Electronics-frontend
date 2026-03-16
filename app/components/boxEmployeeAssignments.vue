<template>
    <div class="bg-white border border-gray-200 rounded-xl overflow-hidden xl:ml-[10px] xl:mr-[20px] xl:mt-[20px]">
        <div class="xl:pl-[10px] mt-[10px] mb-3">
          <h3 class="text-base font-medium">Employee Assignments</h3>
        </div>
        <table class="w-full text-sm">
          <thead class="bg-gray-50 text-gray-500 text-xs">
            <tr>
              <th class="text-left px-4 py-2.5">Employee</th>
              <th class="text-left px-4 py-2.5">Current Shift</th>
              <th class="text-left px-4 py-2.5">Department</th>
              <th class="text-left px-4 py-2.5">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="emp in employees" :key="emp.id" class="border-t border-gray-100">
              <td class="px-4 py-3">{{ emp.employee }}</td>
              <td class="px-4 py-3">{{ emp.current }}</td>
              <td class="px-4 py-3">{{ emp.department }}</td>
              <td class="px-4 py-3">
                <button class="text-sm border border-gray-300 rounded-lg px-3 py-1 hover:bg-gray-100">
                  {{ emp.action }}
                </button>
              </td>
            </tr>
          </tbody>
        </table>
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
<template>
     <div class="bg-white rounded-xl shadow xl:p-6 md:p-6 xl:w-[570px]">
        <h4 class="text-gray-700 font-semibold text-lg mb-4">Recent Attendance</h4>
        <table class="w-full text-sm text-left">
          <thead>
            <tr class="text-gray-400 border-b">
              <th class="pb-2 font-medium">Employee</th>
              <th class="pb-2 font-medium">Check-in</th>
              <th class="pb-2 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="emp in employees" :key="emp.name" class="border-b last:border-0">
              <td class="py-2 text-gray-700">{{ emp.name }}</td>
              <td class="py-2 text-gray-600">{{ emp.time }}</td>
              <td class="py-2">
                <span class="text-xs px-2 py-1 rounded-full" :class="statusClass(emp.status)">
                  {{ emp.status }}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

</template>
<script setup>

const employees = ref([
  { name: 'Alice Johnson', time: '08:02', status: 'Present' },
  { name: 'Bob Smith',     time: '08:15', status: 'Present' },
  { name: 'Carol White',   time: '13:00', status: 'Late' },
  { name: 'David Lee',     time: '07:55', status: 'Present' },
  { name: 'Emma Davis',    time: '—',     status: 'On Leave' },
])


const statusClass = (status) => {
  if (status === 'Present') return 'bg-green-100 text-green-700'
  if (status === 'Late')    return 'bg-yellow-100 text-yellow-700'
  return 'bg-red-100 text-red-600'
}

</script>
<template>
  <div class="border border-line rounded-lg overflow-hidden w-full">
    <div class="flex items-center justify-between w-full p-5">
      <span class="text-xl font-black">Recent Attendance</span>
    </div>
    <div class="overflow-x-auto bg-white">
      <table class="w-full text-left">
        <thead class="bg-gray-100 text-gray-400">
          <tr>
            <td class="px-6 py-5">Employee</td>
            <td class="px-6 py-5">Check-in</td>
            <td class="px-6 py-5">Status</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="emp in employees" :key="emp.name" class="border-t border-line">
            <td class="px-6 py-5">{{ emp.name }}</td>
            <td class="px-6 py-5">{{ emp.time }}</td>
            <td class="px-6 py-5">
              <span :class="statusClass(emp.status)">
                {{ emp.status }}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
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
  if (status === 'Present') return 'bg-green-500/20 backdrop-blur-md text-success px-4 py-2 rounded-lg'
  if (status === 'Late')    return 'bg-yellow-500/20 backdrop-blur-md text-warning px-4 py-2 rounded-lg'
  return 'bg-red-500/20 backdrop-blur-md text-danger px-4 py-2 rounded-lg'
}

</script>
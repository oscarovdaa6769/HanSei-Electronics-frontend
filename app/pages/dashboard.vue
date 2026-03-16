<template>

  <div class="bg-gray-100 min-h-screen xl:w-full p-10">

    <div class="xl:flex xl:pl-[10px] md:pl-[20px] justify-between xl:pr-[20px] pt-4">
      <div>
        <h3 class="text-[24px] font-semibold md:text-gray-800">Dashboard</h3>
        <p class="text-[14px] text-gray-500">Overview --> Dashboard</p>
      </div>
      <div class="flex items-center gap-6 pt-4">
        <span class="text-gray-700 font-medium">Admin</span>
        <span class="text-gray-700 font-mono">{{ currentTime }}</span>
      </div>
    </div>
    <hr class="mt-3 border-gray-300">


    <CardDashboard />






    <!-- Recent Attendance -->
    
    <div class="xl:flex md:block  xl:gap-4 mt-8 xl:pl-[10px] md:pl-[10px] md:pr-[10px] xl:pr-[20px] xl:pb-10 md:pb-10  xl:justify-between">

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













      <!-- Leave Requests -->
    <div class="bg-white rounded-xl shadow xl:p-6  md:p-6 xl:mt-0 md:mt-[10px] xl:w-[570px]">
        <h4 class="text-gray-700 font-semibold text-lg mb-4">Leave Requests</h4>
        <table class="w-full text-sm text-left">
          <thead>
            <tr class="text-gray-400 border-b">
              <th class="pb-2 font-medium">Employee</th>
              <th class="pb-2 font-medium">Dates</th>
              <th class="pb-2 font-medium">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(leave) in leaveRequests" :key="leave.name" class="border-b last:border-0">
              <td class="py-2 text-gray-700">{{ leave.name }}</td>
              <td class="py-2 text-gray-500">{{ leave.dates }}</td>
              <td class="py-2 flex gap-2">
                <button     class="text-xs px-2 py-1 bg-green-100 text-green-700 rounded hover:bg-green-200">Approve</button>
                <button class="text-xs px-2 py-1 bg-red-100 text-red-600 rounded hover:bg-red-200">Reject</button>
              </td>
            </tr>
            <tr v-if="leaveRequests.length === 0">
              <td colspan="3" class="py-4 text-center text-gray-400">No pending requests</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>











  </div>


</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import CardDashboard from '~/components/cardDashboard.vue';

const currentTime = ref('')
let clockInterval = null
const updateClock = () => {
  currentTime.value = new Date().toLocaleTimeString('en-US', { hour12: false })
};


const employees = ref([
  { name: 'Alice Johnson', time: '08:02', status: 'Present' },
  { name: 'Bob Smith',     time: '08:15', status: 'Present' },
  { name: 'Carol White',   time: '13:00', status: 'Late' },
  { name: 'David Lee',     time: '07:55', status: 'Present' },
  { name: 'Emma Davis',    time: '—',     status: 'On Leave' },
])

const leaveRequests = [
  { name: 'Emma Davis', dates: 'Mar 12–14' },
  { name: 'Bob Smith',  dates: 'Mar 20–21' },
]

const statusClass = (status) => {
  if (status === 'Present') return 'bg-green-100 text-green-700'
  if (status === 'Late')    return 'bg-yellow-100 text-yellow-700'
  return 'bg-red-100 text-red-600'
}

onMounted(() => 
    { updateClock(); clockInterval = setInterval(updateClock, 1000) })
onUnmounted(() => clearInterval(clockInterval))
</script>   
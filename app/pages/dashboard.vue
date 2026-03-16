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

      <RecentAttendance />
      <BoxLeaveRequests />
    

    </div>











  </div>


</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
<<<<<<< HEAD
import CardDashboard from '~/components/cardDashboard.vue';
=======
<<<<<<< Updated upstream
import Header from '~/components/Header.vue';
=======
import CardDashboard from '~/components/cardDashboard.vue';
import RecentAttendance from '~/components/boxRecentAttendance.vue';
import BoxLeaveRequests from '~/components/boxLeaveRequests.vue';
>>>>>>> Stashed changes
>>>>>>> feat/dashBoard

const currentTime = ref('')
let clockInterval = null
const updateClock = () => {
  currentTime.value = new Date().toLocaleTimeString('en-US', { hour12: false })
};

<<<<<<< HEAD
=======
<<<<<<< Updated upstream
const cards = [ 
  { label: 'Total Employees', number: '5' },
  { label: 'Present Today', number: '4' },
  { label: 'On Leave', number: '1' },
  { label: 'OT This Month', number: '24h' },
]
>>>>>>> feat/dashBoard

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

=======
>>>>>>> Stashed changes
onMounted(() => 
    { updateClock(); clockInterval = setInterval(updateClock, 1000) })
onUnmounted(() => clearInterval(clockInterval))
</script>   
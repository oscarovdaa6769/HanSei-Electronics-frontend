<template>
  <div class="border border-line rounded-lg overflow-hidden w-full">
    <div class="flex items-center justify-between w-full p-5">
      <span class="text-xl font-black">Leave Requests</span>
    </div>
    <div class="overflow-x-auto bg-white">
      <table class="w-full text-left">
        <thead class="bg-gray-100 text-gray-400">
          <tr>
            <td class="px-6 py-5">Employee</td>
            <td class="px-6 py-5">Dates</td>
            <td class="px-6 py-5">Action</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(leave) in leaveRequests" :key="leave.name" class="border-t border-line">
            <td class="px-6 py-5">{{ leave.name }}</td>
            <td class="px-6 py-5">{{ leave.dates }}</td>
            <td class="py-2 flex gap-2">
              <button class="bg-green-500/20 backdrop-blur-md text-success px-4 py-2 rounded-lg">Approve</button>
              <button class="bg-red-500/20 backdrop-blur-md text-danger px-4 py-2 rounded-lg">Reject</button>
            </td>
          </tr>
          <tr v-if="leaveRequests.length === 0">
            <td colspan="3" class="py-4 text-center text-gray-400">No pending requests</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script setup>
const leaveRequests = [
  { name: 'Emma Davis', dates: 'Mar 12–14' },
  { name: 'Bob Smith',  dates: 'Mar 20–21' },
]

</script>
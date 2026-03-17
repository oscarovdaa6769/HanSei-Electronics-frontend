<template>
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
</template>
<script setup>
const leaveRequests = [
  { name: 'Emma Davis', dates: 'Mar 12–14' },
  { name: 'Bob Smith',  dates: 'Mar 20–21' },
]

</script>
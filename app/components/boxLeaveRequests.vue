<script setup lang="ts">
const config = useRuntimeConfig()
const { data: leaveRequests } = await useFetch(`${config.public.apiBase}/leave_requests`)

const statusClass = (status: string) => {
  if (status === 'Approved') return 'bg-green-500/20 backdrop-blur-md text-success px-4 py-2 rounded-lg'
  if (status === 'Rejected') return 'bg-yellow-500/20 backdrop-blur-md text-warning px-4 py-2 rounded-lg'
  return 'bg-red-500/20 backdrop-blur-md text-danger px-4 py-2 rounded-lg'
}
</script>

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
            <td class="px-6 py-5">Leave Type</td>
            <td class="px-6 py-5">Status</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in leaveRequests?.data" :key="item.id" class="border-t border-line">
            <td class="px-6 py-5">{{ item.employee_name }}</td>
            <td class="px-6 py-5">{{ item.leave_type }}</td>
            <td class="px-6 py-5">
              <span :class="statusClass(item.status)">
                {{ item.status }}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

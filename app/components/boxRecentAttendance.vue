<script setup lang="ts">
import dayjs from 'dayjs';

const config = useRuntimeConfig()
const { data: attendance } = await useFetch(`${config.public.apiBase}/attendance`)

const statusClass = (status: string) => {
  if (status === 'Present') return 'bg-green-500/20 backdrop-blur-md text-success px-4 py-2 rounded-lg'
  if (status === 'Late') return 'bg-yellow-500/20 backdrop-blur-md text-warning px-4 py-2 rounded-lg'
  return 'bg-red-500/20 backdrop-blur-md text-danger px-4 py-2 rounded-lg'
}

function formatTime(time: string) {
  return dayjs(`1970-01-01T${time}`).format('h:mm A')
}
</script>

<template>
  <div class="border border-line rounded-lg overflow-hidden w-full">
    <div class="flex items-center justify-between w-full p-5">
      <span class="text-xl font-black">Recent Attendance</span>
    </div>
    <div class="overflow-x-auto bg-white">
      <table class="w-full text-left">
        <thead class="bg-gray-100 text-gray-400">
          <tr class="text-sm">
            <td class="px-6 py-5">ID</td>
            <td class="px-6 py-5">Employee</td>
            <td class="px-6 py-5">Check-in</td>
            <td class="px-6 py-5">Status</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in attendance?.data" :key="item.id" class="border-t border-line text-xs">
            <td class="px-6 py-5">{{ item.id }}</td>
            <td class="px-6 py-5">{{ item.employee_name }}</td>
            <td class="px-6 py-5">{{ formatTime(item.check_in) }}</td>
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

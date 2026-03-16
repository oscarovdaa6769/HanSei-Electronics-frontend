<template>
  <div class="flex">
    <div class="bg-gray-100 min-h-screen xl:w-full p-10">

      <!-- Page Header -->
      <div class="xl:flex xl:pl-[10px] md:pl-[20px] justify-between xl:pr-[20px] pt-4">
        <div>
          <h3 class="text-[24px] font-semibold md:text-gray-800">Dashboard</h3>
          <p class="text-[14px] text-gray-500">Overview → Dashboard</p>
        </div>
        <div class="flex items-center gap-6 pt-4">
          <span class="text-gray-700 font-medium">Admin</span>
          <span class="text-gray-700 font-mono">{{ currentTime }}</span>
        </div>
      </div>
      <hr class="mt-3 border-gray-300">

      <!-- Shift Schedules -->
      <div class="bg-white border border-gray-200 rounded-xl overflow-hidden xl:ml-[10px] xl:mr-[20px] xl:mt-[20px]">
        <div class="xl:pl-[10px] mt-[10px] mb-3">
          <h3 class="text-base font-medium mb-[10px]">Shift Schedules</h3>
          <button
            @click="showModal = true"
            class="text-sm border border-gray-300 bg-white rounded-lg px-3 py-1.5 hover:bg-gray-100 w-full"
          >
            + Create Shift
          </button>
        </div>
        <table class="w-full text-sm">
          <thead class="bg-gray-50 text-gray-500 text-xs">
            <tr>
              <th class="text-left px-4 py-2.5">Shift Name</th>
              <th class="text-left px-4 py-2.5">Start</th>
              <th class="text-left px-4 py-2.5">End</th>
              <th class="text-left px-4 py-2.5">Days</th>
              <th class="text-left px-4 py-2.5">Assigned</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="shift in shifts" :key="shift.id" class="border-t border-gray-100">
              <td class="px-4 py-3">{{ shift.name }}</td>
              <td class="px-4 py-3">{{ shift.start }}</td>
              <td class="px-4 py-3">{{ shift.end }}</td>
              <td class="px-4 py-3">{{ shift.days }}</td>
              <td class="px-4 py-3">{{ shift.assigned }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Employee Assignments -->
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

    </div>
  </div>

  <!-- Create Shift Modal -->
  <div
    v-if="showModal"
    class="fixed inset-0 bg-black/30 z-50 flex items-center justify-center"
    @click.self="closeModal"
  >
    <div class="bg-white rounded-xl p-6 w-[360px] shadow-lg">
      <h3 class="text-base font-medium mb-4">Create Shift</h3>

      <div class="mb-3">
        <label class="block text-xs text-gray-500 mb-1">Shift Name</label>
        <input
          v-model="form.name"
          type="text"
          placeholder="e.g. Evening Shift"
          class="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
        />
      </div>

      <div class="grid grid-cols-2 gap-3 mb-3">
        <div>
          <label class="block text-xs text-gray-500 mb-1">Start Time</label>
          <input
            v-model="form.start"
            type="time"
            class="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
          />
        </div>
        <div>
          <label class="block text-xs text-gray-500 mb-1">End Time</label>
          <input
            v-model="form.end"
            type="time"
            class="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
          />
        </div>
      </div>

      <div class="mb-4">
        <label class="block text-xs text-gray-500 mb-1">Days</label>
        <input
          v-model="form.days"
          type="text"
          placeholder="e.g. Mon–Fri"
          class="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
        />
      </div>

      <div class="flex justify-end gap-2">
        <button
          @click="closeModal"
          class="text-sm border border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-100"
        >
          Cancel  
        </button>
        <button
          @click="saveShift"
          class="text-sm bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600"
        >
          Save
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Header from '~/components/Header.vue'

// Clock
const currentTime = ref('')
let clockInterval = null
const updateClock = () => {
  currentTime.value = new Date().toLocaleTimeString('en-US', { hour12: false })
}
onMounted(() => { updateClock(); clockInterval = setInterval(updateClock, 1000) })
onUnmounted(() => clearInterval(clockInterval))

// Shifts
const shifts = ref([
  { id: 1, name: 'Morning Shift',   start: '08:00', end: '17:00', days: 'Mon–Fri', assigned: '3 staff' },
  { id: 2, name: 'Afternoon Shift', start: '13:00', end: '22:00', days: 'Mon–Sat', assigned: '1 staff' },
  { id: 3, name: 'Night Shift',     start: '22:00', end: '06:00', days: 'Mon–Fri', assigned: '1 staff' },
  { id: 4, name: 'Morning Shift B', start: '08:00', end: '17:00', days: 'Tue–Sat', assigned: '0 staff' },
])

// Employees
const employees = ref([
  { id: 1, employee: 'Alice Johnson', current: 'Morning Shift',   department: 'Engineering', action: 'Reassign' },
  { id: 2, employee: 'Bob Smith',     current: 'Morning Shift',   department: 'HR',          action: 'Reassign' },
  { id: 3, employee: 'Carol White',   current: 'Afternoon Shift', department: 'Finance',     action: 'Reassign' },
  { id: 4, employee: 'David Lee',     current: 'Morning Shift',   department: 'Sales',       action: 'Reassign' },
  { id: 5, employee: 'Emma Davis',    current: 'Night Shift',     department: 'Operations',  action: 'Reassign' },
])

// Modal
const showModal = ref(false)
const form = ref({ name: '', start: '08:00', end: '17:00', days: '' })

const closeModal = () => {
  showModal.value = false
  form.value = { name: '', start: '08:00', end: '17:00', days: '' }
}

const saveShift = () => {
  if (!form.value.name) return
  shifts.value.push({
    id: Date.now(),
    name: form.value.name,
    start: form.value.start,
    end: form.value.end,
    days: form.value.days || '—',
    assigned: '0 staff',
  })
  closeModal()
}
</script>
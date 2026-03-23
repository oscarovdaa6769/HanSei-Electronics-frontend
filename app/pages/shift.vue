<template>
  <div class="p-10 w-full flex flex-col gap-9">
    <div class="flex justify-between items-center">
      <div class="flex flex-col gap-3 w-full">
        <h1 class="text-4xl font-black uppercase">Shift Management</h1>
        <span class="text-gray-400">Create and manage work shifts, schedules, and assignments</span>
      </div>
      <div class="flex items-center justify-end gap-3 w-full">
        <form class="relative max-w-sm">
          <Icon name="solar:magnifer-linear" size="20" class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"/>
          <input type="text" placeholder="Search employees..." class=" pl-10 pr-4 py-2 border border-line rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"/>
        </form>
        <secondBtn label="Create Shift" icon="solar:add-circle-bold" @click="showModal = true"/>
        <secondBtn label="Assign" icon="solar:user-plus-bold"/>
        <div class="relative">
          <Icon name="solar:bell-bold" size="20"/>
          <div class="w-5 h-5 rounded-full bg-danger flex items-center justify-center text-light absolute -right-2 -top-2 text-sm">5</div>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-4 gap-6">
      <card label="Total Shift" icon="solar:clock-circle-bold" :amount="4" iicon="" message="3 active, 1 inactive" note="text-gray-400" color="bg-blue-500/20 backdrop-blur-md text-primary"/>
      <card label="Unassigned Employees" icon="solar:user-cross-bold" :amount="12" iicon="" message="Need shift assignment" note="text-gray-400" color="bg-green-500/20 backdrop-blur-md text-success"/>
      <card label="Employees per Shift" icon="solar:users-group-rounded-bold" :amount="45" iicon="" message="Average per shift" note="text-gray-400" color="bg-yellow-500/20 backdrop-blur-md text-warning"/>
      <card label="Weekly Assignments" icon="solar:calendar-mark-bold" :amount="312" iicon="" message="Total shifts assigned" note="text-gray-400" color="bg-purple-500/20 backdrop-blue-md text-purple-500"/>
    </div>
    <BoxShiftSchedules />
    <BoxEmployeeAssignments />
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
import { ref, onMounted, onUnmounted } from 'vue';
import BoxEmployeeAssignments from '~/components/boxEmployeeAssignments.vue';
import BoxShiftSchedules from '~/components/boxShiftSchedules.vue';

// Clock
const currentTime = ref('')
let clockInterval = null
const updateClock = () => {
  currentTime.value = new Date().toLocaleTimeString('en-US', { hour12: false })
}
onMounted(() => { updateClock(); clockInterval = setInterval(updateClock, 1000) })
onUnmounted(() => clearInterval(clockInterval))


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

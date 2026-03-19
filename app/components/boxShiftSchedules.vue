<template>
  <div class="border border-line rounded-lg overflow-hidden">
    <div class="flex items-center justify-between w-full p-5">
      <span class="text-xl font-black">Shift Schedules</span>
    </div>
    <div class="overflow-x-auto bg-white">
      <table class="w-full text-left">
        <thead class="bg-gray-100 text-gray-400">
          <tr>
            <td class="px-6 py-5">Shift Name</td>
            <td class="px-6 py-5">Start</td>
            <td class="px-6 py-5">End</td>
            <td class="px-6 py-5">Days</td>
            <td class="px-6 py-5">Assigned</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="shift in shifts" :key="shift.id" class="border-t border-line">
            <td class="px-6 py-5">{{ shift.name }}</td>
            <td class="px-6 py-5">{{ shift.start }}</td>
            <td class="px-6 py-5">{{ shift.end }}</td>
            <td class="px-6 py-5">{{ shift.days }}</td>
            <td class="px-6 py-5">{{ shift.assigned }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
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
// Shifts
const shifts = ref([
  { id: 1, name: 'Morning Shift',   start: '08:00', end: '17:00', days: 'Mon–Fri', assigned: '3 staff' },
  { id: 2, name: 'Afternoon Shift', start: '13:00', end: '22:00', days: 'Mon–Sat', assigned: '1 staff' },
  { id: 3, name: 'Night Shift',     start: '22:00', end: '06:00', days: 'Mon–Fri', assigned: '1 staff' },
  { id: 4, name: 'Morning Shift B', start: '08:00', end: '17:00', days: 'Tue–Sat', assigned: '0 staff' },
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

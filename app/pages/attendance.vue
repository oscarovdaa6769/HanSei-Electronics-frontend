<script setup lang="ts">
import secondBtn from '/components/secondBtn.vue'
import thirdBtn from '/components/thirdBtn.vue'
import card from '/components/card.vue'
import { ref, computed } from 'vue'
import dayjs from 'dayjs'

const activeDropdown = ref(null)

const selectedDepartment = ref('All Departments')
const selectedLeaveType = ref('All Status')
const selectedShift = ref('All Shift')

const departments = [
  "All Departments",
  "Human Resource",
  "IT",
  "Finance",
  "Marketing"
]

const leaveTypes = [
  "All Status",
  "Present",
  "Late",
  "Absent",
]

const shifts = [
  "All Shift",
  "Full Time",
  "Part Time"
]

const toggleDropdown = (name) => {
  activeDropdown.value = activeDropdown.value === name? null : name
}

const selectDepartment = (dep) => {
  selectedDepartment.value = dep
  activeDropdown.value = null
}

const selectLeaveType = (type) => {
  selectedLeaveType.value = type
  activeDropdown.value = null
}

const selectShift = (shift) => {
  selectedShift.value = shift
  activeDropdown.value = null
}

const showCalendar = ref(false)
const selectedDate = ref('Select Date')

const today = new Date()
const day = ref(today.getDate())
const month = ref(today.getMonth())
const year = ref(today.getFullYear())

const months = [
  "January","February","March","April",
  "May","June","July","August",
  "September","October","November","December"
]

const weekDays = [
  "Sun","Mon","Tue","Wed","Thu","Fri","Sat"
]

const daysInMonth = computed(() => {
  return new Date(year.value, month.value + 1, 0).getDate()
})

const firstDay = computed(() => {
  return new Date(year.value, month.value, 1).getDay()
})

const days = computed(() => {
  return Array.from({ length: daysInMonth.value }, (_, i) => i + 1)
})

function nextMonth() {
  if (month.value === 11) {
    month.value = 0
    year.value++
  } else {
    month.value++
  }
}

function prevMonth() {
  if (month.value === 0) {
    month.value = 11
    year.value--
  } else {
    month.value--
  }
}

function nextDay() {
  const lastDay = daysInMonth.value
  if (day.value === lastDay) {
    day.value = 1
    nextMonth()
  } else {
    day.value++
  }
}

function prevDay() {
  if (day.value === 1) {
    prevMonth()
    day.value = daysInMonth.value
  } else {
    day.value--
  }
}

function selectDate(day) {
  selectedDate.value = `${year.value}-${month.value + 1}-${day}`
  showCalendar.value = false
}

const config = useRuntimeConfig()
const page = ref(1)

const { data: attendances, refresh } = await useFetch(`${config.public.apiBase}/attendance`,
  {
    query: computed(() => ({
      page: page.value
    }))
  }
)

watch(page, () => {
  refresh()
})

function nextPage() {
  if (page.value < attendances.value?.last_page) {
    page.value++
  }
}

function prevPage() {
  if (page.value > 1) {
    page.value--
  }
}

function statusClass(status: string) {
  if (status === 'Present') return 'bg-green-500/20 backdrop-blur-md text-success px-4 py-2 rounded-lg'
  if (status === 'Late') return 'bg-yellow-500/20 backdrop-blur-md text-warning px-4 py-2 rounded-lg'
  if (status === 'Absent') return 'bg-red-500/20 backdrop-blur-md text-danger px-4 py-2 rounded-lg'
  return ''
}

function typeClass(type: string) {
  if (type.toLowerCase() === 'full time') return 'bg-green-500/20 backdrop-blur-md text-success px-4 py-2 rounded-lg'
  else return 'bg-yellow-500/20 backdrop-blur-md text-warning px-4 py-2 rounded-lg'
}

function formatTime(time: string) {
  return dayjs(`1970-01-01T${time}`).format('h:mm A')
}
</script>

<template>
  <div class="p-10 w-full flex flex-col gap-9">
    <div class="flex justify-between items-center">
      <div class="flex flex-col gap-3 w-full">
        <h1 class="text-4xl font-black uppercase">Attendance</h1>
        <span class="text-gray-400">Track employee attendance, check-ins, and working hours</span>
      </div>
      <div class="flex items-center justify-end gap-3 w-full">
        <form class="relative w-full max-w-sm">
          <Icon name="solar:magnifer-linear" size="20" class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"/>
          <input type="text" placeholder="Search requests..." class="w-full pl-10 pr-4 py-2 border border-line rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"/>
        </form>
        <secondBtn label="New Request" icon="solar:add-circle-bold"/>
        <div class="relative">
          <Icon name="solar:bell-bold" size="20"/>
          <div class="w-5 h-5 rounded-full bg-danger flex items-center justify-center text-light absolute -right-2 -top-2 text-sm">5</div>
        </div>
      </div>
    </div>
    <div class="p-5 flex items-center justify-between bg-gray-100 rounded-lg">
      <div class="flex items-center gap-3">
        <div class="flex items-center justify-between gap-3 border border-line px-4 py-2 rounded-lg w-90 bg-light cursor-pointer">
          <button class="p-1 hover:bg-gray-100 rounded-lg flex items-center justify-center" @click="prevDay">
            <Icon name="solar:alt-arrow-left-bold" size="20"/>
          </button>
          <span class="">{{ months[month] }} {{ day }}, {{ year }}</span>
          <button class="p-1 hover:bg-gray-100 rounded-lg flex items-center justify-center" @click="nextDay">
            <Icon name="solar:alt-arrow-right-bold" size="20"/>
          </button>
        </div>
        <thirdBtn label="Today"/>
      </div>
      <div class="flex items-center gap-3">
        <thirdBtn label="Daily"/>
        <thirdBtn label="Weekly"/>
        <thirdBtn label="Monthly"/>
        <thirdBtn label="Custom"/>
      </div>
    </div>
    <div class="">
      <div class="grid grid-cols-4 gap-6">
        <card label="On Leave" icon="solar:calendar-mark-bold" :amount="8" iicon="" message="5 approved requests" note="text-gray-400" color="bg-blue-500/20 backdrop-blur-md text-primary"/>
        <card label="Present Today" icon="solar:user-check-bold" :amount="142" iicon="" message="91% attendance rate" note="text-gray-400" color="bg-green-500/20 backdrop-blur-md text-success"/>
        <card label="Late Arrivals" icon="solar:clock-circle-bold" :amount="8" iicon="" message="5.1% of present employees" note="text-gray-400" color="bg-yellow-500/20 backdrop-blur-md text-warning"/>
        <card label="Absent" icon="solar:user-cross-bold" :amount="6" iicon="" message="3.8% of total employees" note="text-gray-400" color="bg-red-500/20 backdrop-blue-md text-danger"/>
      </div>
    </div>
  </div>
  <div class="px-10">
    <div class="p-5 flex items-center justify-between bg-gray-100 rounded-lg">
      <div class="flex items-center gap-3">
        <div class="relative w-50">
          <button @click="toggleDropdown('department')" class="w-full flex justify-between items-center px-4 py-2 border rounded-lg border-line bg-light cursor-pointer">
            {{ selectedDepartment }} <Icon name="solar:alt-arrow-down-bold" size="20"/>
          </button>
          <div class="absolute mt-2 w-full bg-light border-line border rounded-lg shadow-lg overflow-hidden z-1000" v-if="activeDropdown === 'department'">
            <div class="px-4 py-2 hover:bg-primary hover:text-light cursor-pointer" v-for="dep in departments" :key="dep" @click="selectDepartment(dep)">{{ dep }}</div>
          </div>
        </div>
        <div class="relative w-50">
          <button @click="toggleDropdown('leaveType')" class="w-full flex justify-between items-center px-4 py-2 border rounded-lg border-line bg-light cursor-pointer">
            {{ selectedLeaveType }} <Icon name="solar:alt-arrow-down-bold" size="20"/>
          </button>
          <div class="absolute mt-2 w-full bg-light border-line border rounded-lg shadow-lg overflow-hidden z-1000" v-if="activeDropdown === 'leaveType'">
            <div class="px-4 py-2 hover:bg-primary hover:text-light cursor-pointer" v-for="type in leaveTypes" :key="type" @click="selectLeaveType(type)">{{ type }}</div>
          </div>
        </div>
        <div class="relative w-50">
          <button @click="toggleDropdown('shift')" class="w-full flex justify-between items-center px-4 py-2 border rounded-lg border-line bg-light cursor-pointer">
            {{ selectedShift }} <Icon name="solar:alt-arrow-down-bold" size="20"/>
          </button>
          <div class="absolute mt-2 w-full bg-light border-line border rounded-lg shadow-lg overflow-hidden z-1000" v-if="activeDropdown === 'shift'">
            <div class="px-4 py-2 hover:bg-primary hover:text-light cursor-pointer" v-for="shift in shifts" :key="shift" @click="selectShift(shift)">{{ shift }}</div>
          </div>
        </div>
        <div class="relative">
          <div @click="showCalendar = !showCalendar" class="flex items-center justify-between gap-3 border border-line px-4 py-2 rounded-lg w-90 bg-light cursor-pointer">
            <span>{{ selectedDate }}</span>
            <Icon name="solar:calendar-mark-bold" size="20"/>
          </div>
          <div class="absolute w-full bg-light border border-line rounded-lg shadow-lg mt-2 px-4 py-2 z-1000" v-if="showCalendar">
            <div class="flex items-center justify-between mb-3">
              <button class="p-1 hover:bg-gray-100 rounded-lg flex items-center justify-center" @click="prevMonth">
                <Icon name="solar:alt-arrow-left-bold" size="20"/>
              </button>
              <span class="">{{ months[month] }} {{ year }}</span>
              <button class="p-1 hover:bg-gray-100 rounded-lg flex items-center justify-center" @click="nextMonth">
                <Icon name="solar:alt-arrow-right-bold" size="20"/>
              </button>
            </div>
            <div class="grid grid-cols-7 text-center mb-2">
              <div class="" v-for="day in weekDays" :key="day">{{ day }}</div>
            </div>
            <div class="grid grid-cols-7 gap-1">
              <div class="" v-for="n in firstDay" :key="'empty'+n"></div>
              <div class="flex items-center justify-center hover:bg-blue-500/20 backdrop-blur-md hover:text-primary rounded-lg cursor-pointer text-center p-2" v-for="day in days" :key="day" @click="selectDate(day)">{{ day }}</div>
            </div>
          </div>
        </div>
      </div>
      <secondBtn label="Apply Filters" icon="solar:filter-bold"/>
    </div>
  </div>
  <div class="p-10 w-full flex flex-col">
    <div class="border border-line rounded-lg overflow-hidden">
      <div class="flex items-center justify-between w-full p-5">
        <span class="text-xl font-black">Today's Attendance Record</span>
        <div class="flex items-center gap-3">
          <secondBtn icon="solar:printer-bold" label="Print"/>
          <secondBtn icon="solar:file-text-bold" label="CSV"/>
          <secondBtn icon="solar:document-bold" label="PDF"/>
        </div>
      </div>
      <div class="overflow-x-auto bg-white">
        <table class="w-full text-left">
          <thead class="bg-gray-100 text-gray-400">
            <tr>
              <td class="px-6 py-5">ID</td>
              <td class="w-2/12 px-6 py-5">Employee</td>
              <td class="w-2/12 px-6 py-5">Department</td>
              <td class="px-6 py-5">Time Status</td>
              <td class="px-6 py-5">Status</td>
              <td class="px-6 py-5">Check In</td>
              <td class="px-6 py-5">Check Out</td>
              <td class="px-6 py-5">Over Time</td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in attendances?.data" :key="item.id" class="border-t border-line">
              <td class="px-6 py-5">{{ item.id }}</td>
              <td class="px-6 py-5">{{ item.employee_name }}</td>
              <td class="px-6 py-5">{{ item.department }}</td>
              <td class="px-6 py-5"><span :class="typeClass(item.type)">{{ item.type }}</span></td>
              <td class="px-6 py-5"><span :class="statusClass(item.status)">{{ item.status }}</span></td>
              <td class="px-6 py-5">{{ formatTime(item.check_in) }}</td>
              <td class="px-6 py-5">{{ formatTime(item.check_out) }}</td>
              <td class="px-6 py-5">{{ item.over_time ? item.over_time + 'h' : '-' }}</td>
            </tr>
          </tbody>
        </table>
        <div class="flex items-center justify-between p-4 border-t border-line">
          <thirdBtn label="Previous" @click="prevPage" :disabled="page === 1"/>
          <span class="text-gray-400">Page {{ attendances?.current_page }} of {{ attendances?.last_page }}</span>
          <thirdBtn label="Next" @click="nextPage" :disabled="page === attendances?.last_page"/>
        </div>
      </div>
    </div>
  </div>
</template>

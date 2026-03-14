<script setup lang="ts">
import secondBtn from '/components/secondBtn.vue'
import thirdBtn from '/components/thirdBtn.vue'
import card2 from '/components/card2.vue'
import { ref } from 'vue'

const activeDropdown = ref(null)

const selectedDepartment = ref('All Departments')
const selectedLeaveType = ref('All Leave Types')

const departments = [
  "All Departments",
  "Human Resource",
  "IT",
  "Finance",
  "Marketing"
]

const leaveTypes = [
  "All Leave Types",
  "Sick Leave",
  "Vacation Leave",
  "Maternity Leave",
  "Casual Leave"
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

const showCalendar = ref(false)
const selectedDate = ref('Select Date')

const today = new Date()
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

function selectDate(day) {
  selectedDate.value = `${year.value}-${month.value + 1}-${day}`
  showCalendar.value = false
}
</script>

<template>
  <div class="p-10 w-full flex flex-col gap-9">
    <div class="flex justify-between items-center">
      <div class="flex flex-col gap-3 w-full">
        <h1 class="text-4xl font-black uppercase">Leave Request</h1>
        <span class="text-gray-400">Manage and track employee time-off requests</span>
      </div>
      <div class="flex items-center gap-3 w-full">
        <form class="relative w-full max-w-sm">
          <Icon name="solar:magnifer-linear" size="20" class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"/>
          <input type="text" placeholder="Search requests..." class="w-full pl-10 pr-4 py-2 border border-line rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"/>
        </form>
        <secondBtn label="New Request" icon="solar:add-circle-bold"/>
        <Icon name="solar:bell-bold" size="20" class="relative"/>
        <div class="w-5 h-5 rounded-full bg-danger flex items-center justify-center text-light absolute right-7 top-15 text-sm">5</div>
      </div>
    </div>
    <div class="">
      <div class="grid grid-cols-4 gap-6">
        <card label="Employees on Leave" icon="solar:users-group-rounded-bold" :amount="8" iicon="" message="Currently away" note="text-gray-400" color="bg-blue-500/20 backdrop-blur-md text-primary"/>
        <card label="Approved This Month" icon="solar:check-circle-bold" :amount="24" iicon="" message="+8 from last month" note="text-gray-400" color="bg-green-500/20 backdrop-blur-md text-success"/>
        <card label="Pending Request" icon="solar:clock-circle-bold" :amount="12" iicon="" message="Waiting for approval" note="text-gray-400" color="bg-yellow-500/20 backdrop-blur-md text-warning"/>
        <card label="Rejected" icon="solar:close-circle-bold" :amount="3" iicon="" message="This month" note="text-gray-400" color="bg-red-500/20 backdrop-blue-md text-danger"/>
      </div>
    </div>
    <div class="flex flex-col gap-3">
      <div class="flex items-center gap-3 border-b border-line pb-4">
        <thirdBtn label="All Requests"/>
        <thirdBtn label="Pending"/>
        <thirdBtn label="Approved"/>
        <thirdBtn label="Rejected"/>
        <thirdBtn label="My Requests"/>
      </div>
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
    <div class="grid grid-cols-3 gap-3">
      <card2 shortName="BS" fullName="Bona Sovena" dep="Finance" id="PR-023" status="Pending" color="backdrop-blur-md bg-yellow-500/20 text-warning" type="Annual Leave" icon="solar:calendar-mark-bold" color2="bg-yellow-500/20 backdrop-blur-md text-warning" date="Mar 25, 2026" date2="Mar 30, 2026" period="5 Days" graph="Family vacation to Jeju Island. Need time off for travel and rest." status2="Requested: Mar 10, 2026">
        <template #actions>
          <button class="bg-green-500/20 backdrop-blur-md text-success py-2 rounded-lg w-full flex items-center justify-center cursor-pointer hover:bg-green-500/30">
              <Icon name="solar:check-circle-bold" size="20"/>
          </button>
          <button class="bg-red-500/20 backdrop-blur-md text-danger py-2 rounded-lg w-full flex items-center justify-center cursor-pointer hover:bg-red-500/30">
              <Icon name="solar:close-circle-bold cursor-pointer hover:bg-" size="20"/>
          </button>
        </template>
      </card2>
      <card2 shortName="DO" fullName="Det Oudomveasna" dep="IT" id="QC-015" status="Pending" color="backdrop-blur-md bg-yellow-500/20 text-warning" type="Sick Leave" icon="solar:stethoscope-bold" color2="bg-red-500/20 backdrop-blur-md text-danger" date="Mar 18, 2026" date2="Mar 20, 2026" period="3 Days" graph=" Doctor's appointment and recovery from flu symptoms. Will provide medical certificate." status2="Requested: Mar 15, 2026">
        <template #actions>
          <button class="bg-green-500/20 backdrop-blur-md text-success py-2 rounded-lg w-full flex items-center justify-center cursor-pointer hover:bg-green-500/30">
              <Icon name="solar:check-circle-bold" size="20"/>
          </button>
          <button class="bg-red-500/20 backdrop-blur-md text-danger py-2 rounded-lg w-full flex items-center justify-center cursor-pointer hover:bg-red-500/30">
              <Icon name="solar:close-circle-bold cursor-pointer hover:bg-" size="20"/>
          </button>
        </template>
      </card2>
      <card2 shortName="TS" fullName="Thea Sithul" dep="IT" id="WH-008" status="Approved" color="backdrop-blur-md bg-green-500/20 text-success" type="Personal Leave" icon="solar:user-bold" color2="bg-blue-500/20 backdrop-blur-md text-primary" date="Mar 22, 2026" date2="Mar 23, 2026" period="2 Days" graph="Personal family matters. Need to attend to urgent family situation." status2="Approved by: HR Manager">
        <template #actions>
          <button class="bg-blue-500/20 backdrop-blur-md text-primary py-2 rounded-lg w-full flex items-center justify-center cursor-pointer hover:bg-blue-500/30">
            <Icon name="solar:eye-bold" size="20"/>
          </button>
        </template>
      </card2>
    </div>
  </div>
</template>

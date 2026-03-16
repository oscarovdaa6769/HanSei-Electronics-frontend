<script setup lang="ts">
import secondBtn from '/components/secondBtn.vue'
import thirdBtn from '/components/thirdBtn.vue'
import card2 from '/components/card2.vue'
import card2Btn1 from '/components/card2Btn1.vue'
import card2Btn2 from '/components/card2Btn2.vue'
import available from '/components/available.vue'
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
    <div class="flex flex-col gap-3">
      <div class="grid grid-cols-3 gap-3">
        <card2 shortName="BS" fullName="Bona Sovena" dep="Finance" id="PR-023" status="Pending" color="backdrop-blur-md bg-yellow-500/20 text-warning" type="Annual Leave" icon="solar:calendar-mark-bold" color2="bg-yellow-500/20 backdrop-blur-md text-warning" date="Mar 25, 2026" date2="Mar 30, 2026" period="5 Days" graph="Family vacation to Jeju Island. Need time off for travel and rest." status2="Requested: Mar 10, 2026">
          <template #actions>
            <card2Btn2 icon1="solar:check-circle-bold" icon2="solar:close-circle-bold"/>
          </template>
        </card2>
        <card2 shortName="DO" fullName="Det Oudomveasna" dep="IT" id="QC-015" status="Pending" color="backdrop-blur-md bg-yellow-500/20 text-warning" type="Sick Leave" icon="solar:stethoscope-bold" color2="bg-red-500/20 backdrop-blur-md text-danger" date="Mar 18, 2026" date2="Mar 20, 2026" period="3 Days" graph="Doctor's appointment and recovery from flu symptoms. Will provide medical certificate." status2="Requested: Mar 15, 2026">
          <template #actions>
            <card2Btn2 icon1="solar:check-circle-bold" icon2="solar:close-circle-bold"/>
          </template>
        </card2>
        <card2 shortName="TS" fullName="Thea Sithul" dep="IT" id="WH-008" status="Approved" color="backdrop-blur-md bg-green-500/20 text-success" type="Personal Leave" icon="solar:user-bold" color2="bg-blue-500/20 backdrop-blur-md text-primary" date="Mar 22, 2026" date2="Mar 23, 2026" period="2 Days" graph="Personal family matters. Need to attend to urgent family situation." status2="Approved by: HR Manager">
          <template #actions>
            <card2Btn1 icon="solar:eye-bold"/>
          </template>
        </card2>
      </div>
      <div class="grid grid-cols-3 gap-3">
        <card2 shortName="CR" fullName="Cristiano Ronaldo" dep="Human Resource" id="MT-012" status="Rejected" color="backdrop-blur-md bg-red-500/20 text-danger" type="Annual Leave" icon="solar:calendar-mark-bold" color2="bg-yellow-500/20 backdrop-blur-md text-warning" date="Mar 10, 2026" date2="Mar 17, 2026" period="7 Days" graph="Planned overseas vacation. Already purchased tickets." status2="Rejected: Mar 12, 2026">
          <template #actions>
            <card2Btn1 icon="solar:eye-bold"/>
          </template>
        </card2>
        <card2 shortName="LM" fullName="Lionel Messi" dep="Marketing" id="PR-031" status="Pending" color="backdrop-blur-md bg-yellow-500/20 text-warning" type="Maternity Leave" icon="tabler:baby-carriage-filled" color2="bg-green-500/20 backdrop-blur-md text-success" date="Apr 1, 2026" date2="Jul 1, 2026" period="90 Days" graph="Maternity leave. Due date is March 25, 2026. Medical certificate attached." status2="Requested: Mar 5, 2026">
          <template #actions>
            <card2Btn2 icon1="solar:check-circle-bold" icon2="solar:close-circle-bold"/>
          </template>
        </card2>
        <card2 shortName="NJ" fullName="Neymar Jr" dep="Finance" id="IT-005" status="Approved" color="backdrop-blur-md bg-green-500/20 text-success" type="Sick Leave" icon="solar:stethoscope-bold" color2="bg-red-500/20 backdrop-blur-md text-danger" date="Mar 14, 2026" date2="Mar 16, 2026" period="3 Days" graph="Dental surgery recovery. Cannot work due to pain and medication." status2="Approved by: HR Manager">
          <template #actions>
            <card2Btn1 icon="solar:eye-bold"/>
          </template>
        </card2>
      </div>
    </div>
    <div class="border border-line rounded-lg overflow-hidden">
      <div class="flex items-center justify-between w-full p-5">
        <span class="text-xl font-black">Leave History</span>
        <secondBtn label="Export" icon="solar:export-bold"/>
      </div>
      <div class="overflow-x-auto bg-white">
        <table class="w-full text-left">
          <thead class="bg-gray-100 text-gray-400">
            <tr>
              <td class="px-6 py-5">Employee</td>
              <td class="px-6 py-5">Department</td>
              <td class="px-6 py-5">Leave Type</td>
              <td class="px-6 py-5">Period</td>
              <td class="px-6 py-5">Days</td>
              <td class="px-6 py-5">Status</td>
              <td class="px-6 py-5">Requested</td>
              <td class="px-6 py-5">Action</td>
            </tr>
          </thead>
          <tbody>
            <tr class="border-t border-line">
              <td class="px-6 py-5">Bona Sovena</td>
              <td class="px-6 py-5">Finance</td>
              <td class="px-6 py-5">Annual Leave</td>
              <td class="px-6 py-5">Mar 25-30, 2026</td>
              <td class="px-6 py-5">5</td>
              <td class="px-6 py-5"><span class="bg-yellow-500/20 backdrop-blur-md text-warning px-4 py-2 rounded-lg">Pending</span></td>
              <td class="px-6 py-5">Mar 10, 2025</td>
              <td class="px-6 py-5"><Icon name="solar:check-circle-bold" class="cursor-pointer bg-green-500/50 backdrop-blur-md hover:bg-success" size="20"/><Icon name="solar:close-circle-bold" class="cursor-pointer bg-red-500/50 backdrop-blur-md hover:bg-danger" size="20"/></td>
            </tr>
          </tbody>
          <tbody>
            <tr class="border-t border-line">
              <td class="px-6 py-5">Det Oudomveasna</td>
              <td class="px-6 py-5">IT</td>
              <td class="px-6 py-5">Sick Leave</td>
              <td class="px-6 py-5">Mar 18-20, 2026</td>
              <td class="px-6 py-5">3</td>
              <td class="px-6 py-5"><span class="bg-yellow-500/20 backdrop-blur-md text-warning px-4 py-2 rounded-lg">Pending</span></td>
              <td class="px-6 py-5">Mar 15, 2025</td>
              <td class="px-6 py-5"><Icon name="solar:check-circle-bold" class="cursor-pointer bg-green-500/50 backdrop-blur-md hover:bg-success" size="20"/><Icon name="solar:close-circle-bold" class="cursor-pointer bg-red-500/50 backdrop-blur-md hover:bg-danger" size="20"/></td>
            </tr>
          </tbody>
          <tbody>
            <tr class="border-t border-line">
              <td class="px-6 py-5">Thea Sithul</td>
              <td class="px-6 py-5">IT</td>
              <td class="px-6 py-5">Personal Leave</td>
              <td class="px-6 py-5">Mar 22-23, 2026</td>
              <td class="px-6 py-5">2</td>
              <td class="px-6 py-5"><span class="bg-green-500/20 backdrop-blur-md text-success px-4 py-2 rounded-lg">Approved</span></td>
              <td class="px-6 py-5">Mar 12, 2025</td>
              <td class="px-6 py-5"><Icon name="solar:eye-bold" class="cursor-pointer bg-blue-500/50 backdrop-blur-md hover:bg-primary" size="20"/></td>
            </tr>
          </tbody>
          <tbody>
            <tr class="border-t border-line">
              <td class="px-6 py-5">Cristiano Ronaldo</td>
              <td class="px-6 py-5">Human Resource</td>
              <td class="px-6 py-5">Annual Leave</td>
              <td class="px-6 py-5">Mar 10-17, 2026</td>
              <td class="px-6 py-5">7</td>
              <td class="px-6 py-5"><span class="bg-red-500/20 backdrop-blur-md text-danger px-4 py-2 rounded-lg">Rejected</span></td>
              <td class="px-6 py-5">Mar 5, 2025</td>
              <td class="px-6 py-5"><Icon name="solar:eye-bold" class="cursor-pointer bg-blue-500/50 backdrop-blur-md hover:bg-primary" size="20"/></td>
            </tr>
          </tbody>
        </table>
        <div class="flex items-center justify-between p-4 border-t border-line">
          <thirdBtn label="Previous"/>
          <span class="text-gray-400">Page 1 of 3</span>
          <thirdBtn label="Next"/>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-3 gap-6">
      <available :amount="15" type="Annual Leave Used" color="bg-primary" period="15/20 days"/>
      <available :amount="3" type="Sick Leave Used" color="bg-warning" period="3/10 days"/>
      <available :amount="2" type="Remaining PTO" color="bg-success" period="2 days left"/>
    </div>
  </div>
</template>

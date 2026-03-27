<script setup lang="ts">
import { ref, computed } from 'vue';
import {onMounted } from 'vue';
import secondBtn from '~/components/secondBtn.vue';
import employeeMiniDashboard from '~/components/employeeMiniDashboard.vue';

const isModalOpen = ref(false);
const currentTime =ref('');

const newEmp = ref({ name: '', department: '', position: '' });

// const saveEmployee = () => {
//   const lastIdNum = employees.value.length > 0
//     ? parseInt (employees.value[employees.value.length - 1].id.substring(1))
//     : 0
//   const nextId = `E${String(lastIdNum + 1).padStart(3, '0')}`

//   employees.value.push({
//     id: nextId,
//     ...newEmp.value,
//     status: 'Active'
//   })

//   newEmp.value = { name: '', department: '', position: ''}
//   isModalOpen.value = false
// }

onMounted(() => {
  const update = () => { currentTime.value = new Date().toLocaleTimeString('en-GB');};
  update()
  setInterval(update, 1000)
})

const search = ref('')

const config = useRuntimeConfig()
const page = ref(1)

const { data: employees, refresh: refreshList } = useFetch(`${config.public.apiBase}/employee`, {
  query: computed(() => ({
    page: page.value
  }))
})

const { data: employeesMiniDashboard, refresh: refreshMiniDashboard, pending, error } = useFetch(
  `${config.public.apiBase}/employeeminidashboard`
)

watch(page, () => {
  refreshList()
})

function nextPage() {
  if (page.value < employees.value?.last_page) {
    page.value++
  }
}

function prevPage() {
  if (page.value > 1) {
    page.value--
  }
}

function statusClass(status: string) {
  if (status.toLowerCase() === 'active') return 'bg-green-500/20 backdrop-blur-md text-success px-4 py-2 rounded-lg'
  else return 'bg-red-500/20 backdrop-blur-md text-danger px-4 py-2 rounded-lg'
}

function actionClass(action: string) {
  if (action.toLowerCase() === 'edit') return 'bg-green-500/20 backdrop-blur-md text-success px-4 py-2 rounded-lg cursor-pointer'
  else return 'bg-red-500/20 backdrop-blur-md text-danger px-4 py-2 rounded-lg cursor-pointer'
}

const retry = () => refreshMiniDashboard()
</script>

<template>
  <div class="p-10 w-full flex flex-col gap-9">
    <div class="flex justify-between items-center">
      <div class="flex flex-col gap-3 w-full">
        <h1 class="text-4xl font-black uppercase">Employees</h1>
        <span class="text-gray-400">Manage employee information and roles</span>
      </div>
      <div class="flex items-center justify-end gap-3 w-full">
        <form class="relative w-full max-w-sm">
          <Icon name="solar:magnifer-linear" size="20" class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"/>
          <input type="text" placeholder="Search employees..." class="w-full pl-10 pr-4 py-2 border border-line rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" v-model="search"/>
        </form>
        <secondBtn label="Add Employee" icon="solar:add-circle-bold" @click="isModalOpen = true"/>
        <div class="relative">
          <Icon name="solar:bell-bold" size="20"/>
          <div class="w-5 h-5 rounded-full bg-danger flex items-center justify-center text-light absolute -right-2 -top-2 text-sm">5</div>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-4 gap-6">
      <employeeMiniDashboard
        :employees="employeesMiniDashboard"
        :pending="pending"
        :error="error"
        @retry="retry"
      />
    </div>
    <div class="border border-line rounded-lg overflow-hidden">
      <div class="flex items-center justify-between w-full p-5">
        <span class="text-xl font-black">Employee Directory</span>
        <div class="flex items-center gap-3">
          <secondBtn label="Export" icon="solar:export-bold"/>
          <secondBtn icon="solar:printer-bold" label="Print"/>
        </div>
      </div>
      <div class="overflow-x-auto bg-white">
        <table class="w-full text-left">
          <thead class="bg-gray-100 text-gray-400">
            <tr>
              <td class="px-6 py-5">ID</td>
              <td class="w-2/12 px-6 py-5">Employee</td>
              <td class="w-2/12 px-6 py-5">Department</td>
              <td class="px-6 py-5">Position</td>
              <td class="px-6 py-5">Status</td>
              <td class="px-6 py-5">Action</td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in employees?.data" :key="item.id" class="border-t border-line">
              <td class="py-5 px-6">{{ item.id }}</td>
              <td class="py-5 px-6">{{ item.employee_name }}</td>
              <td class="py-5 px-6">{{ item.department }}</td>
              <td class="py-5 px-6">{{ item.position }}</td>
              <td class="py-5 px-6">
                <span :class="statusClass(item.status)">
                  {{ item.status }}
                </span>
              </td>
              <td class="py-5 px-6">
                <button :class="actionClass(item.action)">{{ item.action }}</button>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="flex items-center justify-between p-4 border-t border-line">
          <thirdBtn label="Previous" @click="prevPage" :disabled="page === 1"/>
          <span class="text-gray-400">Page {{ employees?.current_page }} of {{ employees?.last_page }}</span>
          <thirdBtn label="Next" @click="nextPage" :disabled="page === employees?.last_page"/>
        </div>
      </div>
    </div>

    <div v-if="isModalOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm">
      <div class="bg-white w-full max-w-md rounded-2xl shadow-2xl p-8 border border-slate-100">
        <h3 class="text-xl font-bold text-slate-900 mb-6">New Employee Details</h3>

        <form @submit.prevent="saveEmployee" class="space-y-4">
          <div>
            <label class="block text-xs font-semibold text-slate-400 uppercase mb-1">Full Name</label>
            <input v-model="newEmp.name" type="text" required class="w-full bg-slate-50 border border-line rounded-lg px-4 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500" placeholder="John Doe">
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block text-xs font-semibold text-slate-400 uppercase mb-1">	Department</label>
              <input v-model="newEmp.department" type="text" required class="w-full bg-slate-50 border border-line rounded-lg px-4 py-2 text-slate-900 focus:border-cyan-500" placeholder="Engineering">
            </div>
            <div>
              <label class="block text-xs font-semibold text-slate-400 uppercase mb-1">Position</label>
              <input v-model="newEmp.position" type="text" required class="w-full bg-slate-50 border border-line rounded-lg px-4 py-2 text-slate-900 focus:border-cyan-500" placeholder="Software Engineer ">
            </div>
          </div>

          <div class="flex gap-3 mt-8">
            <button type="button" @click="isModalOpen = false" class="flex-1 px-4 py-2.5 rounded-lg border border-line text-gray-400 font-semibold hover:bg-slate-50 transition-colors">Cancel</button>
            <button type="submit" class="flex-1 px-4 py-2.5 rounded-lg bg-primary hover:bg-blue-800 text-light font-bold transition-all">Save Employee</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>


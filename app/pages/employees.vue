<template>
  <div class="p-10 w-full flex flex-col gap-9">
    <div class="flex justify-between items-center">
      <div class="flex flex-col gap-3 w-full">
        <h1 class="text-4xl font-black uppercase">Employees</h1>
        <span class="text-gray-400">Manage employee information and roles</span>
      </div>
      <div class="flex items-center gap-3 w-full">
        <form class="relative w-full max-w-sm">
          <Icon name="solar:magnifer-linear" size="20" class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"/>
          <input type="text" placeholder="Search employees..." class="w-full pl-10 pr-4 py-2 border border-line rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"/>
        </form>
        <secondBtn label="Add Employee" icon="solar:add-circle-bold" @click="isModalOpen = true"/>
        <div class="relative">
          <Icon name="solar:bell-bold" size="20"/>
          <div class="w-5 h-5 rounded-full bg-danger flex items-center justify-center text-light absolute -right-2 -top-2 text-sm">5</div>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-4 gap-6">
      <card label="Total Employees" icon="solar:users-group-rounded-bold" :amount="156" iicon="solar:arrow-up-linear" message="8 new this month" note="text-gray-400" color="bg-blue-500/20 backdrop-blur-md text-primary"/>
      <card label="Active" icon="solar:user-check-bold" :amount="148" iicon="" message="94.8% of total" note="text-gray-400" color="bg-green-500/20 backdrop-blur-md text-success"/>
      <card label="On leave" icon="solar:clock-circle-bold" :amount="8" iicon="" message="5 approved, 3 pending" note="text-gray-400" color="bg-yellow-500/20 backdrop-blur-md text-warning"/>
      <card label="Departments" icon="solar:buildings-bold" :amount="6" iicon="" message="Production largest" note="text-gray-400" color="bg-purple-500/20 backdrop-blue-md text-purple-500"/>
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
              <td class="px-6 py-5">Employee</td>
              <td class="px-6 py-5">Department</td>
              <td class="px-6 py-5">Position</td>
              <td class="px-6 py-5">Status</td>
              <td class="px-6 py-5">Action</td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="emp in employees" :key="emp.id" class="border-t border-line">
              <td class="py-5 px-6">{{ emp.id }}</td>
              <td class="py-5 px-6">{{ emp.name }}</td>
              <td class="py-5 px-6">{{ emp.department }}</td>
              <td class="py-5 px-6">{{ emp.position }}</td>
              <td class="py-5 px-6">
                <span
                  :class="emp.status === 'Active'
                    ? 'bg-green-500/20 backdrop-blur-md text-success px-4 py-2 rounded-lg'
                    : 'bg-red-500/20 backdrop-blur-md text-danger px-4 py-2 rounded-lg'"
                >
                  {{ emp.status }}
                </span>
              </td>
              <td class="py-5 px-6">
                <span @click="removeEmployee(emp.id)" class="bg-red-500/20 backdrop-blur-md text-danger px-4 py-2 rounded-lg cursor-pointer">Remove</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div v-if="isModalOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm">
      <div class="bg-white w-full max-w-md rounded-2xl shadow-2xl p-8 border border-slate-100">
        <h3 class="text-xl font-bold text-slate-900 mb-6">New Employee Details</h3>

        <form @submit.prevent="saveEmployee" class="space-y-4">
          <div>
            <label class="block text-xs font-semibold text-slate-400 uppercase mb-1">Full Name</label>
            <input v-model="newEmp.name" type="text" required class="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500" placeholder="John Doe">
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block text-xs font-semibold text-slate-400 uppercase mb-1">	Department</label>
              <input v-model="newEmp.department" type="text" required class="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 text-slate-900 focus:border-cyan-500" placeholder="Engineering">
            </div>
            <div>
              <label class="block text-xs font-semibold text-slate-400 uppercase mb-1">Position</label>
              <input v-model="newEmp.position" type="text" required class="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 text-slate-900 focus:border-cyan-500" placeholder="Software Engineer ">
            </div>
          </div>

          <div class="flex gap-3 mt-8">
            <button type="button" @click="isModalOpen = false" class="flex-1 px-4 py-2.5 rounded-xl border border-slate-200 text-slate-500 font-semibold hover:bg-slate-50 transition-colors">Cancel</button>
            <button type="submit" class="flex-1 px-4 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-white font-bold transition-all">Save Employee</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { id } from '@nuxt/ui/runtime/locale/index.js';
import {onMounted } from 'vue';
import secondBtn from '/components/secondBtn.vue';

const isModalOpen = ref(false);
const currentTime =ref('');

const employees = ref([
  {id: 'E001',
  name: 'Sambart',
  department: 'Engineering',
  position: 'Lead Developer',
  status: 'Active'
},

  {id: 'E002',
  name: 'Bana',
  department: 'HR',
  position:'HR Manager',
  status: 'Active'
},

  {id: 'E003',
  name: 'Hana',
  department: 'Finance',
  position: 'Accountant',
  status: 'Active'
},

  {id: 'E004',
  name: 'Nona',
  department: 'Sales',
  position: 'Sale Rep',
  status:'Active'
},

  {id: 'E005',
  name: 'Danhel',
  department: 'Operations',
  position: 'Coordinator',
  status:'Active'
},
])

const newEmp = ref({ neme: '', department: '', position: '' });

const saveEmployee = () => {
  const lastIdNum = employees.value.length > 0
  ? parseInt (employees.value[employees.value.length - 1].id.substring(1))
  :0;
  const nextId = `E${String(lastIdNum + 1).padStart(3, '0')}`;

  employees.value.push({
    id: nextId,
    ...newEmp.value,
    status: 'Active'
  });

  newEmp.value = { name: '', department: '', position: ''};
  isModalOpen.value = false;
};

 const removeEmployee = (id) => {
  employees.value = employees.value.filter(emp => emp.id !== id);
 };

 onMounted(() => {
  const update = () => { currentTime.value = new Date().toLocaleTimeString('en-GB');};
  update();
  setInterval(update, 1000);
 });
</script>

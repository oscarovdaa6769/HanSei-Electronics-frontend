<template>
  <div class="min-h-screen bg-[#F3F4F6] p-6 font-sans text-slate-600 relative">
    
    <header class="flex justify-between items-center mb-8 px-2">
      <div>
        <h1 class="text-4xl font-bold text-slate-900 tracking-tight">EMPLOYEES</h1>
        <nav class="text-xs text-slate-600 mt-1">Overview → <span class="text-slate-600">Employees</span></nav>
      </div>
      <div class="flex items-center gap-4">
        <span class="bg-white border border-slate-200 px-3 py-1 rounded text-blue-600 text-xs font-semibold uppercase shadow-sm">Admin</span>
        <span class="text-slate-500 font-mono text-sm">{{ currentTime }}</span>
      </div>
    </header>

    <div class="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
      <div class="p-6">
        <h2 class="text-lg font-semibold text-slate-800 mb-6">Employee List</h2>
        
        <button 
          @click="isModalOpen = true"
          class="w-full py-2 mb-8 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-200 active:scale-[0.98]"
        >
          + Add Employee
        </button>

        <div class="overflow-x-auto">
          <table class="w-full text-left">
            <thead>
              <tr class="text-slate-400 text-[11px] uppercase tracking-wider border-b border-slate-100">
                <th class="pb-4 px-2">ID</th>
                <th class="pb-4 px-2">Name</th>
                <th class="pb-4 px-2">Department</th>
                <th class="pb-4 px-2">Position</th>
                <th class="pb-4 px-2 text-center">Status</th>
                <th class="pb-4 px-2 text-right">Action</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-50">
              <tr v-for="emp in employees" :key="emp.id" class="hover:bg-slate-50 transition-colors">
                <td class="py-4 px-2 text-sm font-mono text-slate-400">{{ emp.id }}</td>
                <td class="py-4 px-2 font-bold text-slate-900">{{ emp.name }}</td>
                <td class="py-4 px-2 text-sm">{{ emp.department }}</td>
                <td class="py-4 px-2 text-sm text-slate-500">{{ emp.position }}</td>
                <td class="py-4 px-2 text-center">
                  <span :class="emp.status === 'Active' ? 'text-emerald-600 bg-emerald-50 border-emerald-100' : 'text-amber-600 bg-amber-50 border-amber-100'" class="px-3 py-1 rounded-lg text-[10px] font-bold uppercase border">
                    {{ emp.status }}
                  </span>
                </td>
                <td class="py-4 px-2 text-right">
                  <button @click="removeEmployee(emp.id)" class="bg-red-500 hover:bg-red-600 text-white px-4 py-1.5 rounded-lg text-xs font-bold transition-all">Remove</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
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
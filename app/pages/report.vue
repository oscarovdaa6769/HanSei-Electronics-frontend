<template>
    <div class="flex items-center justify-between bg-[#0f172a] p-6 text-white border-b border-slate-800">
  
  <div class="flex flex-col">
    <h1 class="text-2xl font-bold tracking-tight">Reports</h1>
    <nav class="text-sm text-slate-400 mt-1">
      Overview <span class="mx-1"></span> Reports
    </nav>
  </div>

  <div class="flex items-center gap-4">
    <span class="bg-blue-900/40 text-blue-400 px-3 py-1 rounded-full text-xs font-medium border border-blue-800/50">
      Admin
    </span>
    <span class="text-slate-400 text-sm font-mono">
      14:32:35
    </span>
  </div>
</div>



<div class="min-h-screen bg-[#0f172a] p-8 text-white font-sans">
  

  <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
    
    <div class="bg-[#1e293b] rounded-xl p-6 border border-slate-700 shadow-xl">
      <div class="flex items-center gap-2 mb-6">
        <span class="text-xl"><i class="fa-solid fa-calendar"></i></span>
        <h2 class="text-lg font-semibold">Attendance History</h2>
      </div>
      <table class="w-full text-left">
        <thead class="text-xs text-slate-400 uppercase border-b border-slate-700">
          <tr>
            <th class="pb-3">Date</th>
            <th class="pb-3">Employee</th>
            <th class="pb-3">Status</th>
          </tr>
        </thead>
        <tbody class="text-sm">
          <tr class="border-b border-slate-800/50">
            <td class="py-4 text-slate-300">2026-03-12</td>
            <td class="py-4">Sarah Williams</td>
            <td class="py-4"><span class="bg-emerald-500/10 text-emerald-500 px-3 py-1 rounded-full text-xs font-medium">Present</span></td>
          </tr>
          <tr>
            <td class="py-4 text-slate-300">2026-03-12</td>
            <td class="py-4">David Miller</td>
            <td class="py-4"><span class="bg-orange-500/10 text-orange-500 px-3 py-1 rounded-full text-xs font-medium">On Leave</span></td>
          </tr>
          <tr class="border-b border-slate-800/50">
            <td class="py-4 text-slate-300">2026-03-12</td>
            <td class="py-4">Alice Johnson</td>
            <td class="py-4"><span class="bg-emerald-500/10 text-emerald-500 px-3 py-1 rounded-full text-xs font-medium">Present</span></td>
          </tr>
          <tr>
            <td class="py-4 text-slate-300">2026-03-12</td>
            <td class="py-4">Emma Davis</td>
            <td class="py-4"><span class="bg-orange-500/10 text-orange-500 px-3 py-1 rounded-full text-xs font-medium">On Leave</span></td>
          </tr>
           <tr>
            <td class="py-4 text-slate-300">2026-03-12</td>
            <td class="py-4">Michael Chen</td>
            <td class="py-4"><span class="bg-orange-500/10 text-orange-500 px-3 py-1 rounded-full text-xs font-medium">On Leave</span></td>
          </tr>
          
        </tbody>
      </table>
    </div>

    <div class="bg-[#1e293b] rounded-xl p-6 border border-slate-700 shadow-xl">
      <div class="flex items-center gap-2 mb-6">
        <span class="text-xl"></span>
        <h2 class="text-lg font-semibold">Leave History</h2>
      </div>
      <table class="w-full text-left">
        <thead class="text-xs text-slate-400 uppercase border-b border-slate-700">
          <tr>
            <th class="pb-3">Employee</th>
            <th class="pb-3">Type</th>
            <th class="pb-3">Status</th>
          </tr>
        </thead>
        <tbody class="text-sm">
          <tr class="border-b border-slate-800/50">
            <td class="py-4 text-slate-300">Emma Davis</td>
            <td class="py-4 text-slate-300">Annual Leave</td>
            <td class="py-4"><span class="bg-emerald-500/10 text-emerald-500 px-3 py-1 rounded-full text-xs font-medium">Approved</span></td>
          </tr>
          <tr>
            <td class="py-4 text-slate-300">Carol White</td>
            <td class="py-4 text-slate-300">Sick Leave</td>
            <td class="py-4"><span class="bg-amber-500/10 text-amber-500 px-3 py-1 rounded-full text-xs font-medium">Pending</span></td>
          </tr>
          <tr>
            <td class="py-4 text-slate-300">David Lee</td>
            <td class="py-4 text-slate-300">Emergency Leave</td>
            <td class="py-4"><span class="bg-amber-500/10 text-amber-500 px-3 py-1 rounded-full text-xs font-medium">Pending</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <div class="bg-[#1e293b] rounded-xl p-6 border border-slate-700 shadow-xl">
    <div class="flex items-center gap-2 mb-6">
      <span class="text-xl"></span>
      <h2 class="text-lg font-semibold">Salary Overview</h2>
    </div>
    <table class="w-full text-left">
      <thead class="text-xs text-slate-400 uppercase border-b border-slate-700">
        <tr>
          <th class="pb-3">Employee</th>
          <th class="pb-3">Department</th>
          <th class="pb-3 text-blue-400">Net Salary</th>
          <th class="pb-3">OT Hours</th>
        </tr>
      </thead>
      <tbody class="text-sm">
        
        <tr>
          <td class="py-4">Emily Davis</td>
          <td class="py-4 text-slate-300">Human Resources</td>
          <td class="py-4 text-blue-400 font-medium">$2456</td>
          <td class="py-4 text-slate-300">5h</td>
        </tr>
        <tr>
          <td class="py-4">David Miller</td>
          <td class="py-4 text-slate-300">Engineering</td>
          <td class="py-4 text-blue-400 font-medium">$4031</td>
          <td class="py-4 text-slate-300">7h</td>
        </tr>
        <tr>
          <td class="py-4">Alice Johnson</td>
          <td class="py-4 text-slate-300">IT Support</td>
          <td class="py-4 text-blue-400 font-medium">$5432</td>
          <td class="py-4 text-slate-300">2h</td>
        </tr>
        <tr>
          <td class="py-4">Michael Chen</td>
          <td class="py-4 text-slate-300">Operations</td>
          <td class="py-4 text-blue-400 font-medium">$4034</td>
          <td class="py-4 text-slate-300">3h</td>
        </tr>
        <tr>
          <td class="py-4">Bob Smith</td>
          <td class="py-4 text-slate-300">Sales</td>
          <td class="py-4 text-blue-400 font-medium">$3039</td>
          <td class="py-4 text-slate-300">9h</td>
        </tr>
        <tr>
          <td class="py-4">David Lee</td>
          <td class="py-4 text-slate-300">HR</td>
          <td class="py-4 text-blue-400 font-medium">$2831</td>
          <td class="py-4 text-slate-300">3h</td>
        </tr>
        <tr>
          <td class="py-4">Alice Johnson</td>
          <td class="py-4 text-slate-300">Finance</td>
          <td class="py-4 text-blue-400 font-medium">$2331</td>
          <td class="py-4 text-slate-300">1h</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
</template>
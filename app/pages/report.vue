<template>
  <div class="flex items-center justify-between bg-white p-7 text-slate-900 border-b border-slate-200">
    <div class="flex flex-col">
      <h1 class="text-2xl font-bold tracking-tight">Reports</h1>
      <nav class="text-sm text-slate-500 mt-1">
        Overview <span class="mx-1">/</span> Reports
      </nav>
    </div>

    <div class="flex items-center gap-4">
      <span class="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-medium border border-blue-200">
        Admin
      </span>
      <span class="text-slate-500 text-sm font-mono">
        14:32:35
      </span>
    </div>
  </div>



  <div class="min-h-screen bg-slate-50 p-8 text-slate-900 font-sans">
  
  <div class="flex justify-end gap-6 mb-6">
    
    <div class="bg-white rounded-xl p-6 border border-slate-200 shadow-sm w-full max-w-125">
      <div class="flex items-center gap-2 mb-6">
        <span class="text-xl text-slate-600"><i class="fa-solid fa-calendar"></i></span>
        <h2 class="text-lg font-semibold text-slate-800">Attendance</h2>
      </div>
      <table class="w-full text-left">
        <thead class="text-xs text-slate-500 uppercase border-b border-slate-100">
          <tr>
              <th class="pb-3">Date</th>
              <th class="pb-3">Employee</th>
              <th class="pb-3">Status</th>
            </tr>
          </thead>
          <tbody class="text-sm">
  <tr class="border-b border-slate-50">
    <td class="py-3 text-slate-600">2026-03-12</td>
    <td class="py-3 font-medium">Sarah Williams</td>
    <td class="py-3">
      <span class="bg-emerald-100 text-emerald-700 px-3 py-1 text-xs font-medium rounded-full">
        Present
      </span>
    </td>
  </tr>
  <tr class="border-b border-slate-50">
    <td class="py-3 text-slate-600">2026-03-12</td>
    <td class="py-3 font-medium">David Miller</td>
    <td class="py-3">
      <span class="bg-orange-100 text-orange-700 px-3 py-1 text-xs font-medium rounded-full">
        On Leave
      </span>
    </td>
  </tr>
  <tr class="border-b border-slate-50">
    <td class="py-3 text-slate-600">2026-03-12</td>
    <td class="py-3 font-medium">Emma Davis</td>
    <td class="py-3">
      <span class="bg-orange-100 text-orange-700 px-3 py-1 text-xs font-medium rounded-full">
        On Leave
      </span>
    </td>
  </tr>
</tbody>
      </table>
    </div>

    <div class="bg-white rounded-xl p-5 border border-slate-200 shadow-sm w-full max-w-122">
      <div class="flex items-center gap-2 mb-6">
        <h2 class="text-lg font-semibold text-slate-800">Leave History</h2>
      </div>
      <table class="w-full text-left">
        <thead class="text-xs text-slate-500 uppercase border-b border-slate-100">
          <tr>
              <th class="pb-3">Employee</th>
              <th class="pb-3">Type</th>
              <th class="pb-3">Status</th>
            </tr>
          </thead>
          <tbody class="text-sm">
            <tr class="border-b border-slate-50">
              <td class="py-3 font-medium">Emma Davis</td>
              <td class="py-3 text-slate-600">Annual Leave</td>
              <td class="py-3"><span class="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-medium">Approved</span></td>
            </tr>
            <tr class="border-b border-slate-50">
              <td class="py-3 font-medium">Carol White</td>
              <td class="py-3 text-slate-600">Sick Leave</td>
              <td class="py-3"><span class="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-xs font-medium">Pending</span></td>
            </tr>
            <tr class="border-b border-slate-50">
              <td class="py-3 font-medium">David Miller</td>
              <td class="py-3 text-slate-600">Sick Leave</td>
              <td class="py-3"><span class="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-xs font-medium">Pending</span></td>
            </tr>
          </tbody>
      </table>
    </div>

  ​​ ​   </div>

<div class="min-h-screen bg-slate-50 p-2 text-slate-900 font-sans">
  
  <div class="flex justify-end mb-6">
    
    <div class="bg-white rounded-xl p-6 border border-slate-200 shadow-sm w-full max-w-258">
      <div class="flex items-center gap-2 mb-6">
        <h2 class="text-lg font-semibold text-slate-800">Salary Overview</h2>
      </div>
      
      <table class="w-full text-left">
        <thead class="text-xs text-slate-500 uppercase border-b border-slate-100">
           <tr>
            <th class="pb-3">Employee</th>
            <th class="pb-3">Department</th>
            <th class="pb-3 text-blue-600">Net Salary</th>
            <th class="pb-3">OT Hours</th>
          </tr>
        </thead>
        <tbody class="text-sm">
          <tr class="border-b border-slate-50">
            <td class="py-3 font-medium">Emily Davis</td>
            <td class="py-3 text-slate-600">IT Support</td>
            <td class="py-3 text-blue-600 font-bold">$4,456</td>
            <td class="py-3 text-slate-600">6h</td>
          </tr>
          <tr class="border-b border-slate-50">
            <td class="py-3 font-medium"> David Miller</td>
            <td class="py-3 text-slate-600">Finance</td>
            <td class="py-3 text-blue-600 font-bold">$3,136</td>
            <td class="py-3 text-slate-600">5h</td>
          </tr>
          <tr class="border-b border-slate-50">
            <td class="py-3 font-medium"> Sarah Williams</td>
            <td class="py-3 text-slate-600">Sales</td>
            <td class="py-3 text-blue-600 font-bold">$3,456</td>
            <td class="py-3 text-slate-600">4h</td>
          </tr>
          <tr class="border-b border-slate-50">
            <td class="py-3 font-medium">ECarol White</td>
            <td class="py-3 text-slate-600">Human Resources</td>
            <td class="py-3 text-blue-600 font-bold">$3,456</td>
            <td class="py-3 text-slate-600">2h</td>
          </tr>
          </tbody>
      </table>
    </div>
    
  </div>
   </div>
  </div>
</template>
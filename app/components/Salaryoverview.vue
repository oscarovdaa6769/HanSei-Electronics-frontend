<template>
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
</template>
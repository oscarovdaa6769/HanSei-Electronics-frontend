<template>
  <div class="p-10 w-full flex flex-col gap-9">
    <div class="flex justify-between items-center">
      <div class="flex flex-col gap-3 w-full">
        <h1 class="text-4xl font-black uppercase">Reports & Analytics</h1>
        <span class="text-gray-400">View and export attendance, leave, and salary reports</span>
      </div>
      <div class="flex items-center justify-end gap-3 w-full">
        <form class="relative w-full max-w-sm">
          <Icon
            name="solar:magnifer-linear"
            size="20"
            class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            placeholder="Search employees..."
            class="w-full pl-10 pr-4 py-2 border border-line rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            v-model="search"
          />
        </form>
        <div class="relative">
          <Icon name="solar:bell-bold" size="20" />
          <div
            class="w-5 h-5 rounded-full bg-danger flex items-center justify-center text-light absolute -right-2 -top-2 text-sm"
          >
            5
          </div>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-4 gap-6">
      <card label="Total Working Days" icon="solar:calendar-mark-bold" :amount="22" iicon="" message="March 2026" note="text-gray-400" color="bg-blue-500/20 backdrop-blur-md text-primary"/>
      <card label="Attendance Rate" icon="solar:clipboard-check-bold" :amount="'91.5%'" iicon="solar:arrow-up-linear" message="2.3% from last month" note="text-gray-400" color="bg-green-500/20 backdrop-blur-md text-success"/>
      <card label="Total Late Arrivals" icon="solar:clock-circle-bold" :amount="48" iicon="solar:arrow-down-linear" message="12 from last month" note="text-gray-400" color="bg-yellow-500/20 backdrop-blur-md text-warning"/>
      <card label="Total Absences" icon="solar:user-cross-bold" :amount="32" iicon="" message="8 unexcused" note="text-gray-400" color="bg-red-500/20 backdrop-blue-md text-danger"/>
    </div>
    <div class="flex items-start gap-6">
      <div class="border border-line rounded-lg overflow-hidden w-full">
        <div class="flex items-center justify-between w-full p-5">
          <span class="text-xl font-black">Attendance</span>
        </div>
        <div class="overflow-x-auto bg-white">
          <table class="w-full text-left">
            <thead
              class="bg-gray-100 text-gray-400"
            >
              <tr>
                <td class="px-6 py-5">Date</td>
                <td class="px-6 py-5">Employee</td>
                <td class="px-6 py-5">Status</td>
              </tr>
            </thead>
            <tbody>
              <tr class="border-t border-line">
                <td class="px-6 py-5">2026-03-12</td>
                <td class="px-6 py-5">Sarah Williams</td>
                <td class="px-6 py-5">
                  <span
                    class="bg-green-500/20 backdrop-blur-md text-success px-4 py-2 rounded-lg"
                  >
                    Present
                  </span>
                </td>
              </tr>
              <tr class="border-t border-line">
                <td class="px-6 py-5">2026-03-12</td>
                <td class="px-6 py-5">David Miller</td>
                <td class="px-6 py-5">
                  <span
                    class="bg-yellow-500/20 backdrop-blur-md text-warning px-4 py-2 rounded-lg"
                  >
                    On Leave
                  </span>
                </td>
              </tr>
              <tr class="border-t border-line">
                <td class="px-6 py-5">2026-03-12</td>
                <td class="px-6 py-5">Emma Davis</td>
                <td class="px-6 py-5">
                  <span
                    class="bg-yellow-500/20 backdrop-blur-md text-warning px-4 py-2 rounded-lg"
                  >
                    On Leave
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="border border-line rounded-lg overflow-hidden w-full">
        <div class="flex items-center justify-between w-full p-5">
          <span class="text-xl font-black">Leave History</span>
        </div>
        <table class="w-full text-left">
          <thead
            class="bg-gray-100 text-gray-400"
          >
            <tr>
              <td class="px-6 py-5">Employee</td>
              <td class="px-6 py-5">Type</td>
              <td class="px-6 py-5">Status</td>
            </tr>
          </thead>
          <tbody>
            <tr class="border-t border-line">
              <td class="px-6 py-5">Emma Davis</td>
              <td class="px-6 py-5">Annual Leave</td>
              <td class="px-6 py-5">
                <span
                  class="bg-green-500/20 backdrop-blur-md text-success px-4 py-2 rounded-lg">Approved</span>
              </td>
            </tr>
            <tr class="border-b border-slate-50">
              <td class="px-6 py-5">Carol White</td>
              <td class="px-6 py-5">Sick Leave</td>
              <td class="px-6 py-5">
                <span
                  class="bg-yellow-500/20 backdrop-blur-md text-warning px-4 py-2 rounded-lg">Pending</span>
              </td>
            </tr>
            <tr class="border-b border-slate-50">
              <td class="px-6 py-5">David Miller</td>
              <td class="px-6 py-5">Sick Leave</td>
              <td class="px-6 py-5">
                <span
                  class="bg-yellow-500/20 backdrop-blur-md text-warning px-4 py-2 rounded-lg">Pending</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div
      class="border border-line rounded-lg overflow-hidden w-full"
    >
      <div class="flex items-center justify-between w-full p-5">
        <span class="text-xl font-black">
          Salary Overview
        </span>
      </div>

      <table class="w-full text-left">
        <thead
          class="bg-gray-100 text-gray-400"
        >
          <tr>
            <td class="px-6 py-5">Employee</td>
            <td class="px-6 py-5">Department</td>
            <td class="px-6 py-5">Net Salary</td>
            <td class="px-6 py-5">OT Hours</td>
          </tr>
        </thead>
        <tbody>
          <tr class="border-t border-line">
            <td class="px-6 py-5">Emily Davis</td>
            <td class="px-6 py-5">IT Support</td>
            <td class="px-6 py-5">$4,456</td>
            <td class="px-6 py-5">6h</td>
          </tr>
          <tr class="border-t border-line">
            <td class="px-6 py-5">David Miller</td>
            <td class="px-6 py-5">Finance</td>
            <td class="px-6 py-5">$3,136</td>
            <td class="px-6 py-5">5h</td>
          </tr>
          <tr class="border-t border-line">
            <td class="px-6 py-5">Sarah Williams</td>
            <td class="px-6 py-5">Sales</td>
            <td class="px-6 py-5">$3,456</td>
            <td class="px-6 py-5">4h</td>
          </tr>
          <tr class="border-t border-line">
            <td class="px-6 py-5">ECarol White</td>
            <td class="px-6 py-5">Human Resources</td>
            <td class="px-6 py-5">$3,456</td>
            <td class="px-6 py-5">2h</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

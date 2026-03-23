<script setup>

</script>

<template>
  <div class="p-10 w-full flex flex-col gap-9">
    <div class="flex justify-between items-center">
      <div class="flex flex-col gap-3 w-full">
        <h1 class="text-4xl font-black uppercase">My Profile</h1>
        <span class="text-gray-400">Manage your personal information and preferences</span>
      </div>
      <div class="flex items-center justify-end gap-3 w-full">
        <div class="relative">
          <Icon name="solar:bell-bold" size="20"/>
          <div class="w-5 h-5 rounded-full bg-danger flex items-center justify-center text-light absolute -right-2 -top-2 text-sm">5</div>
        </div>
      </div>
    </div>
    <div class="flex items-center gap-6">
      <div class="flex flex-col border border-line rounded-lg overflow-hidden w-[350px]">
        <div class="relative h-25 bg-primary">
          <div class="absolute -bottom-24 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary w-25 h-25 text-2xl flex items-center justify-center text-light font-black border-5 border-light shadow-xl">BS</div>
        </div>
        <div class="flex flex-col items-center gap-3 p-6 pt-13">
          <span class="text-xl font-black">Bona Sovena</span>
          <p class="text-gray-400">Finance</p>
          <span class="bg-blue-500/20 backdrop-blur-md text-primary px-4 py-2 rounded-lg">Active Employee</span>
        </div>
        <div class="border-t border-line grid grid-cols-3 py-3 px-6 gap-6 text-sm">
          <div class="flex flex-col gap-1 items-center text-center">
            <span class="text-lg font-black">8</span>
            <p class="text-gray-400">Years with Company</p>
          </div>
          <div class="flex flex-col gap-1 items-center text-center">
            <span class="text-lg font-black">15</span>
            <p class="text-gray-400">Leave Days Used</p>
          </div>
          <div class="flex flex-col gap-1 items-center text-center">
            <span class="text-lg font-black">98%</span>
            <p class="text-gray-400">Attendance Rate</p>
          </div>
        </div>
        <div class="border-t border-line flex flex-col gap-3 py-3 px-6">
          <span class="text-lg font-black">Contact Information</span>
          <div class="flex gap-3 items-center">
            <Icon name="solar:letter-bold" class="text-primary"/>
            <span class="text-gray-400">sovena.bona@gmail.com</span>
          </div>
          <div class="flex gap-3 items-center">
            <Icon name="solar:phone-bold" class="text-primary"/>
            <span class="text-gray-400">+855 12 345 6789</span>
          </div>
          <div class="flex gap-3 items-center">
            <Icon name="solar:map-point-bold" class="text-primary"/>
            <span class="text-gray-400">Phnom Penh, Cambodia</span>
          </div>
          <div class="flex gap-3 items-center">
            <Icon name="solar:buildings-bold" class="text-primary"/>
            <span class="text-gray-400">Human Resources Department</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

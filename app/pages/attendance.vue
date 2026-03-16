<script setup lang="ts">
import secondBtn from '/components/secondBtn.vue'
import card from '/components/card.vue'
</script>

<template>
  <div class="p-10 w-full flex flex-col gap-12">
    <div class="flex justify-between items-center">
      <div class="flex flex-col gap-3">
        <h1 class="text-4xl font-black uppercase">Attendance</h1>
        <span class="text-gray-400">Welcome back, Minho! Here's what's happening today.</span>
      </div>
      <secondBtn label="Export" icon="solar:export-bold"/>
    </div>
    <div class="">
      <div class="grid grid-cols-4 gap-6">
        <card label="Total Employee" icon="solar:user-bold" :amount="156" iicon="solar:arrow-up-linear" message="+12 this month" note="text-success" color="bg-blue-500/20 backdrop-blur-md text-primary"/>
        <card label="Present Today" icon="solar:user-check-bold" :amount="142" iicon="solar:arrow-up-linear" message="+91% attendance" note="text-success" color="bg-green-500/20 backdrop-blur-md text-success"/>
        <card label="On Leave" icon="solar:calendar-mark-bold" :amount="8" iicon="" message="4 pending requests" color="bg-yellow-500/20 backdrop-blur-md text-warning"/>
        <card label="Late Today" icon="solar:clock-circle-bold" :amount="156" iicon="solar:arrow-down-linear" message="+12 this month" note="text-danger" color="bg-red-500/20 backdrop-blue-md text-danger"/>
      </div>
    </div>
  </div>
</template>

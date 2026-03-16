<template>

    <!-- Stat Cards -->
    <div class="flex gap-4 mt-8 xl:pl-[10px] md:pl-[10px] md:pr-[10px] xl:pr-[20px] xl:justify-between md:justify-between">
      <div v-for="card in cards" :key="card.label" class="bg-white rounded-xl p-6 xl:w-[270px] md:w-[180px] shadow hover:shadow-md hover:translate-y-[-5px] transition">
        <p class="text-3xl font-bold text-blue-700">{{ card.number }}</p>
        <p class="text-gray-500 text-sm mt-1">{{ card.label }}</p>
      </div>
    </div>


</template>
<script setup>
const cards = [ 
  { label: 'Total Employees', number: '5' },
  { label: 'Present Today', number: '4' },
  { label: 'On Leave', number: '1' },
  { label: 'OT This Month', number: '24h' },
]
</script>
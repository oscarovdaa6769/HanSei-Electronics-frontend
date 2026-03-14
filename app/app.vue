
<script setup lang="ts">
import Header from './components/Header.vue';

</script>

<template>
  <div class="flex w-screen">
    <div class="">
      <Header/>
    </div>
    <div class="w-full ml-[250px]">
      <NuxtPage/>
    </div>
  </div>
</template>
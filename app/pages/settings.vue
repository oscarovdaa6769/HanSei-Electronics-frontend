<template>
   <div class="min-h-screen bg-[#F3F4F6] p-6 font-sans text-slate-600 relative">
    
    <header class="flex justify-between items-center mb-5 px-2">
      <div>
        <h1 class="text-4xl font-bold text-slate-900 tracking-tight">SETTINGS</h1>
        <nav class="text-xs text-slate-600 mt-1">Overview → <span class="text-slate-600">Employees</span></nav>
      </div>
    </header>
    
  <div class="min-h-screen bg-gray-50 p-4 md:p-10 font-sans text-gray-700">
    <div class="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-sm border border-gray-100">
      
      <section class="mb-8">
        <h2 class="text-xs font-bold text-gray-400 mb-4 uppercase tracking-widest">Your Profile Picture</h2>
        <div class="flex items-center gap-6">
          <img 
            :src="user.profilePic" 
            alt="Profile Preview" 
            class="w-20 h-20 rounded-full object-cover border border-gray-100"
          >
          <div class="flex gap-3">
            <button class="bg-[#6336E4] hover:bg-[#5229c7] text-white px-5 py-2.5 rounded-lg font-semibold transition text-sm">
              Upload New
            </button>
            <button class="bg-gray-200 hover:bg-gray-300 text-gray-600 px-5 py-2.5 rounded-lg font-semibold transition text-sm">
              Remove Profile Picture
            </button>
          </div>
        </div>
      </section>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6 mb-6">
        
        <div class="flex flex-col gap-2">
          <label class="text-xs font-bold text-gray-400 uppercase tracking-widest">Full name</label>
          <input 
            v-model="user.fullName"
            type="text" 
            class="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white shadow-sm"
          >
        </div>

        <div class="flex flex-col gap-2">
          <div class="flex justify-between items-center">
            <label class="text-xs font-bold text-gray-400 uppercase tracking-widest">Email address</label>
          </div>
          <input 
            v-model="user.email"
            type="email" 
            class="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white shadow-sm"
          >
        </div>

        <div class="flex flex-col gap-2">
          <label class="text-xs font-bold text-gray-400 uppercase tracking-widest">Username</label>
          <input 
            v-model="user.username"
            type="text" 
            class="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white shadow-sm"
          >
        </div>

        <div class="flex flex-col gap-2">
          <div class="flex justify-between items-center">
            <label class="text-xs font-bold text-gray-400 uppercase tracking-widest">Phone number</label>
          </div>
          <div class="flex border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-purple-500 shadow-sm">
            <span class="bg-gray-50 px-4 py-3 text-gray-400 border-r border-gray-300 text-sm font-medium">+855</span>
            <input 
              v-model="user.phone"
              type="text" 
              class="p-3 w-full focus:outline-none"
            >
          </div>
        </div>
      </div>

      <div class="flex flex-col gap-2 mb-8">
        <label class="text-xs font-bold text-gray-400 uppercase tracking-widest">Bio</label>
        <textarea 
          v-model="user.bio"
          rows="4" 
          class="border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none shadow-sm"
        ></textarea>
      </div>

      <button 
        @click="handleUpdate"
        class="bg-[#3B00AB] hover:bg-[#2e0085] text-white px-10 py-3.5 rounded-lg font-bold transition shadow-md active:scale-95"
      >
        Update Profile
      </button>

    </div>
  </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

// Initial state matching your screenshot
const user = reactive({
  fullName: '',
  email: '',
  username: '',
  phone: '',
  bio: "",
  profilePic: 'https://i.pravatar.cc/150?u=christine'
})

const handleUpdate = () => {
  console.log('Form Submitted!', user)
  alert('Profile Updated Successfully!')
}
</script>


<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center p-4">
  <div class="bg-white p-10 rounded-2xl shadow-sm w-full max-w-md border border-gray-100">
    
    <div class="flex flex-col items-center mb-8">
    
      <h1 class="text-3xl font-bold text-slate-800 tracking-tight">Signup</h1>
    </div>

    <form class="space-y-5">
      <div>
        <label class="block text-slate-500 mb-2 text-sm">Email address</label>
        <input type="email" 
               class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-500 transition border-opacity-60"
               placeholder="">
      </div>

      <div>

        <label class="block text-slate-500 mb-2 text-sm">Password</label>
        <input type="password" 
               class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-500 transition border-opacity-60"
               placeholder="">
      </div>


      <div class="flex items-center justify-between text-sm">
        <label class="flex items-center text-slate-500 cursor-pointer">
          <input type="checkbox" class="mr-2 w-4 h-4 border-gray-300 rounded text-sky-300 focus:ring-sky-300">
          Stay connected
        </label>

        <a href="#" class="text-sky-500 hover:underline">Forgot your password?</a>
      </div>

    <a href="http://localhost:3000/login" 
   class="block text-center w-full bg-sky-600 text-white font-semibold py-3 rounded-lg hover:bg-sky-800 transition shadow-md active:scale-95">
   Log in
</a>
      <p class="text-center text-slate-600 text-sm mt-6">
        Don't have an account? 
        <a href="#" class="text-sky-500 hover:underline">Create one for free!</a>

      </p>
    </form>
  </div>
</div>
</template>


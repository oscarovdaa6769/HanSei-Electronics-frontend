<template>
  <div class="min-h-screen bg-secondary flex items-center justify-center p-4">
  <div class="bg-white p-10 rounded-lg shadow-lg w-full max-w-md border border-line">

    <div class="flex flex-col items-center mb-8">

      <h1 class="text-3xl font-black text-primary tracking-tight">Login</h1>
    </div>

    <form class="space-y-5">
      <div>
        <label class="block text-gray-400 mb-2 text-sm">Email address</label>
        <input type="email"
               class="w-full px-4 py-3 rounded-lg border border-line focus:outline-none focus:ring-2 focus:ring-primary transition border-opacity-60"
               placeholder="">
      </div>

      <div>
        <label class="block text-gray-400 mb-2 text-sm">Password</label>
        <input type="password"
               class="w-full px-4 py-3 rounded-lg border border-line focus:outline-none focus:ring-2 focus:ring-primary transition border-opacity-60"
               placeholder="">
      </div>

      <div class="flex items-center justify-between text-sm">
        <label class="flex items-center text-slate-500 cursor-pointer">
          <input type="checkbox" class="mr-2 w-4 h-4 border-line rounded text-gray-400 focus:ring-primary">
          Remember me
        </label>
        <a href="#" class="text-danger hover:underline">Forgot your password?</a>
      </div>

      <button type="button" @click="login"

              class="w-full bg-primary text-white font-semibold py-3 rounded-lg hover:bg-blue-800 transition shadow-sm active:scale-[0.98]">

        Log in
      </button>

      <p class="text-center text-gray-400 text-sm mt-3">
        Don't have an account?
        <NuxtLink to="/signup" class="text-primary hover:underline">Create one for free!</NuxtLink>

      </p>
    </form>
  </div>
</div>
</template>

<script setup lang="js">
definePageMeta({
  layout: 'auth'
})

const login = async () => {
  await navigateTo('/dashboard')
}
</script>

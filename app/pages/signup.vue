<template>
  <div class="min-h-screen bg-secondary flex items-center justify-center p-4">
    <div class="bg-white p-10 rounded-lg shadow-lg w-full max-w-md border border-line">
      <div class="flex flex-col items-center mb-8">
        <h1 class="text-3xl font-black text-primary tracking-tight">Signup</h1>
      </div>

      <form class="space-y-5" @submit.prevent="handleSignup">
        <div>
          <label class="block text-gray-400 mb-2 text-sm">Email address</label>
          <input
            v-model="form.email"
            type="email"
            required
            class="w-full px-4 py-3 rounded-lg border border-line focus:outline-none focus:ring-2 focus:ring-primary transition border-opacity-60"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label class="block text-gray-400 mb-2 text-sm">Password</label>
          <input
            v-model="form.password"
            type="password"
            required
            class="w-full px-4 py-3 rounded-lg border border-line focus:outline-none focus:ring-2 focus:ring-primary transition border-opacity-60"
            placeholder="••••••••"
          />
        </div>

        <button
          type="submit"
          :disabled="loading"
          class="block w-full bg-primary text-white font-semibold py-3 rounded-lg hover:bg-blue-800 transition shadow-md active:scale-95 disabled:opacity-50"
        >
          {{ loading ? 'Creating...' : 'Sign up' }}
        </button>

        <p v-if="error" class="text-danger text-center text-sm mt-3">{{ error }}</p>
      </form>

      <p class="text-center text-gray-400 text-sm mt-6">
        Already have an account?
        <NuxtLink to="/login" class="text-primary hover:underline">Log in</NuxtLink>
      </p>
    </div>
  </div>
</template>

<script setup>
definePageMeta({ layout: 'auth' })

const { register } = useAuth()           // ← from composable

const form = reactive({
  email: '',
  password: ''
})

const loading = ref(false)
const error = ref('')

async function handleSignup() {
  loading.value = true
  errorMessage.value = ''
  successMessage.value = ''

  try {
    await signUp({
      name: form.name,
      email: form.email,
      password: form.password,
      // password_confirmation: form.password,   // uncomment if your Laravel validation requires it
    })

    await fetchUser()
    successMessage.value = 'Account created! You are now logged in.'
    setTimeout(() => navigateTo('/dashboard'), 1800)

  } catch (err) {
    console.error('Full signup error:', err)                     // ← important: look in console!

    let msg = 'Signup failed'

    if (err.response) {
      const res = err.response
      console.log('Status:', res.status)
      console.log('Response data:', res._data || res.data)

      if (res.status === 422) {
        // Laravel validation error – show first error nicely
        const errors = res._data?.errors || {}
        const firstField = Object.keys(errors)[0]
        if (firstField) {
          msg = errors[firstField][0] || 'Validation failed'
        } else {
          msg = res._data?.message || 'Invalid data'
        }
      } else if (res.status === 419) {
        msg = 'CSRF token mismatch (419) – check .env Sanctum config'
      } else if (res.status === 401) {
        msg = 'Unauthenticated (401) – possible session issue'
      } else if (res.status === 419 || res.status === 429) {
        msg = 'Too many attempts or CSRF issue'
      } else {
        msg = res._data?.message || `Server error (${res.status})`
      }
    } else if (err.message) {
      msg = err.message
    }

    errorMessage.value = msg
  } finally {
    loading.value = false
  }
}
</script>

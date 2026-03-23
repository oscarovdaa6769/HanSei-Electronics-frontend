// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@nuxt/ui', '@nuxtjs/google-fonts', '@nuxt/icon', 'nuxt-auth-sanctum'],

  devtools: {
    enabled: true
  },

  sanctum: {
    baseUrl: 'http://localhost:8000',     // your Laravel URL (no trailing slash)
    mode: 'cookie',                       // important for SPA
    csrf: {
      cookie: 'XSRF-TOKEN',
      header: 'X-XSRF-TOKEN'
    }
  },

  css: ['~/assets/css/main.css'],

  routeRules: {
    '/': { prerender: true }
  },

  compatibilityDate: '2025-01-15',

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  runtimeConfig: {
    public: {
      apiBase: 'http://localhost:8000'    // we will use this later
    }
  }
})
